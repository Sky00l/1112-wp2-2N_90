import { useState, useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import { supabase } from '../../db/clientSupabase';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';

import axios from 'axios';

import Wrapper from '../../assets/wrappers/BlogPage_xx';

import { LiaMugHotSolid, LiaTheRedYeti } from 'react-icons/lia';
import { CiGlobe } from 'react-icons/ci';

const Mid2NodeBlog_xx = () => {
  const [name, setName] = useState('Hsingtai Chung');
  const [id, setId] = useState(123456789);

  const queryClient = useQueryClient();

  // Read
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ['blogs_xx'],
    queryFn: async () => {
      // initially set fetch data = [], need to modify code
      return [];
    },
  });
  console.log('blog data', data);

  // Create
  // const { mutate: addBlog } = useMutation({});

  // Update
  // const { mutate: updateBlog } = useMutation({});

  // Delete
  // const { mutate: deleteBlog } = useMutation({});

  // clearAll
  // const { mutate: clearAll } = useMutation({});

  // Load All
  // const { mutate: loadAll } = useMutation({});

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
          <h2> Mid2: Get Blogs Using React Query From Node</h2>
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
                        onClick={() => console.log('updateBlog(id)')}
                      >
                        edit
                      </button>

                      <button
                        className='btn'
                        type='button'
                        onClick={() => console.log('deleteBlog(id)')}
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
              onClick={() => console.log('addBlog(id)')}
            >
              Add Blog
            </button>
            <button
              className='btn clear-all'
              type='button'
              onClick={() => console.log('clearAll()')}
            >
              Clear All
            </button>

            <button
              className='btn load-all'
              type='button'
              onClick={() => console.log('loadAll()')}
            >
              Load All
            </button>
          </div>
        </div>
      </section>
    </Wrapper>
  );
};

export default Mid2NodeBlog_xx;
