import { useState, useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import { supabase } from '../../db/clientSupabase';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';

import Wrapper from '../../assets/wrappers/BlogPage_xx';

import { LiaMugHotSolid, LiaTheRedYeti } from 'react-icons/lia';
import { CiGlobe } from 'react-icons/ci';

const Mid1SupaBlog_xx = () => {
  const [name, setName] = useState('Hsingtai Chung');
  const [id, setId] = useState(123456789);

  const queryClient = useQueryClient();

  // Read
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ['blogs_xx'],
    queryFn: async () => {
      try {
        let { data, error } = await supabase.from('blog_xx').select('*');
        console.log('blogs', data);
        return data;
      } catch (error) {
        console.log(error);
      }
    },
  });

  // Create
  const { mutate: addBlog } = useMutation({
    mutationFn: async ({ id, title, descrip, category, img, remote_url }) => {
      try {
        const { data, error } = await supabase
          .from('blog_xx')
          .insert([{ id, title, descrip, category, img, remote_url }])
          .select();
      } catch (error) {
        console.log(error);
      }
    },
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ['blogs_xx'],
      });
      toast.success('blog added, will refresh');
    },
    onError: (error) => {
      toast.error(error.response.data);
    },
  });

  // Load All

  // Update

  // Delete
  const { mutate: deleteBlog } = useMutation({
    mutationFn: async (id) => {
      try {
        const { error } = await supabase.from('blog_xx').delete().eq('id', id);
      } catch (error) {
        console.log(error);
      }
    },
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ['blogs_xx'],
      });
      toast.success('blog deleted, will refresh');
    },
  });

  // DeleteAll

  const { mutate: clearAll } = useMutation({
    mutationFn: async () => {
      try {
        const { error } = await supabase.from('blog_xx').delete().gt('id', 0);
      } catch (error) {
        console.log(error);
      }
    },
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ['blogs_xx'],
      });
      toast.success('all blogs deleted, will refresh');
    },
  });

  if (isLoading) {
    return <p style={{ marginTop: '1rem' }}>Loading...</p>;
  }

  if (error) {
    return <p style={{ marginTop: '1rem' }}>{error.response.data}</p>;
  }

  return (
    <Wrapper>
      <ToastContainer position='top-center' autoClose={1500} />
      <section className='blogs'>
        <div className='section-title'>
          <h2> Mid1: Get Blogs Using React Query </h2>
          <h3>
            {name}, {id}
          </h3>
        </div>
        <div className='blogs-center'>
          {data.map((blog) => {
            const { id, img, category, title, descrip } = blog;
            // return <Mid1Blog_xx key={blog.id} blog={blog} />;
            return (
              <article key={id} className='blog'>
                <img src={img} alt='Coffee photo' className='img blog-img' />
                <div className='blog-content'>
                  <span>
                    {' '}
                    {category}{' '}
                    {category === 'lifestyle' ? (
                      <LiaMugHotSolid />
                    ) : (
                      <CiGlobe />
                    )}
                  </span>
                  <h3>{title}</h3>
                  <p>{descrip}</p>
                  <div className='footer'>
                    <a href='#'>read more</a>
                    <div className='btns'>
                      <button
                        className='btn'
                        type='button'
                        onClick={() => editBlog(id)}
                      >
                        edit
                      </button>

                      <button
                        className='btn'
                        type='button'
                        onClick={() => deleteBlog(id)}
                      >
                        del
                      </button>
                    </div>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
        <div className='blogs-footer'>
          <div className='blogs-footer-btns'>
            <button
              className='btn btn-add'
              type='button'
              onClick={() =>
                addBlog({
                  id: 10,
                  title: 'htchung 123456789',
                  descrip:
                    'Lorem ipsum dolor sit amet consectetur adipisicing elit',
                  category: 'lifestyle',
                  img: '/images/my-1.jpg',
                  remote_url: '',
                })
              }
            >
              Add Blog
            </button>
            <button
              className='btn clear-all'
              type='button'
              onClick={() => clearAll('all')}
            >
              Clear All
            </button>

            <button
              className='btn load-all'
              type='button'
              onClick={() => loadAll()}
            >
              Load All
            </button>
          </div>
        </div>
      </section>
    </Wrapper>
  );
};

export default Mid1SupaBlog_xx;
