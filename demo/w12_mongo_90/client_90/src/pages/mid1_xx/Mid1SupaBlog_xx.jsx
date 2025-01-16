import { useState, useEffect } from 'react'
import { ToastContainer, toast } from 'react-toastify'
import { supabase } from '../../db/clientSupabase'
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query'

import Wrapper from '../../assets/wrappers/BlogPage_xx'
import BlogForm from '../BlogForm' // 引入表單組件
import '../../blog.css'

import { LiaMugHotSolid, LiaTheRedYeti } from 'react-icons/lia'
import { CiGlobe } from 'react-icons/ci'

const Mid1SupaBlog_xx = () => {
  const [name, setName] = useState('林泓君')
  const [id, setId] = useState(207410290)
  const [selectedBlog, setSelectedBlog] = useState(null)
  const [showForm, setShowForm] = useState(false); // 新增狀態來顯示表單
  const queryClient = useQueryClient()

  // Read
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ['blogs_xx'],
    queryFn: async () => {
      try {
        let { data, error } = await supabase.from('mid2_blog_90').select('*')
        console.log('blogs', data)
        return data
      } catch (error) {
        console.error('Error fetching data:', error.message)
        throw new Error(error.message)
        // console.log(error);
      }
    }
  })

  // Create
  const { mutate: addBlog } = useMutation({
    mutationFn: async ({ id, title, descrip, category, img, remote_url }) => {
   
        const { data, error } = await supabase
          .from('mid2_blog_90')
          .insert([{ id, title, descrip, category, img, remote_url }]);
          if (error) throw new Error(error.message);
          return data;
      
    },
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ['blogs_xx']
      })
      toast.success('blog added, will refresh')
    },
    onError: error => {
      toast.error('Error: ' + error.message)
    }
  })

  // Load All

  // Update
  const { mutate: updateBlog } = useMutation({
    mutationFn: async ({ id, updatedData }) => {
      const { data, error } = await supabase
        .from('mid2_blog_90')
        .update(updatedData)
        .eq('id', id);
      if (error) throw new Error(error.message);
      return data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['blogs_xx'] });
      setSelectedBlog(null);
      setShowForm(false); // 關閉表單顯示
      toast.success('Blog updated successfully!');
    },
    onError: (error) => {
      toast.error('Error: ' + error.message);
    },
  });

  // Delete
  const { mutate: deleteBlog } = useMutation({
    mutationFn: async id => {
      try {
        const { error } = await supabase
          .from('mid2_blog_90')
          .delete()
          .eq('id', id)
      } catch (error) {
        console.log(error)
      }
    },
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ['blogs_xx']
      })
      toast.success('blog deleted, will refresh')
    }
  })

  // DeleteAll

  const { mutate: clearAll } = useMutation({
    mutationFn: async () => {
      try {
        const { error } = await supabase
          .from('mid2_blog_90')
          .delete()
          .gt('id', 0)
      } catch (error) {
        console.log(error)
      }
    },
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ['blogs_xx']
      })
      toast.success('all blogs deleted, will refresh')
    }
  })

  const handleEditClick = (blog) => {
    setSelectedBlog(blog); // 編輯選中的部落格
    setShowForm(true); // 顯示表單
  };

  const handleCloseForm = () => {
    setShowForm(false); // 關閉表單
    setSelectedBlog(null); // 清除選中的部落格
  };


  if (isLoading) {
    return <p style={{ marginTop: '1rem' }}>Loading...</p>
  }

  if (error) {
    return <p style={{ marginTop: '1rem' }}>{error.response.data}</p>
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
          {data.map(blog => {
            const { id, img, category, title, descrip } = blog
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
                        onClick={() => handleEditClick(blog)}
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
            )
          })}
        </div>
        <div className='blogs-footer'>
          <div className='blogs-footer-btns'>
            <button
              className='btn btn-add'
              onClick={() => {
                setSelectedBlog(null) // 清除選中的部落格資料，準備新增
                setShowForm(true) // 顯示表單
              }}
            >
              Add Blog
            </button>

            {/* 如果選中了部落格或是新增狀態，顯示表單 */}
            {showForm && (
              <BlogForm
                blog={selectedBlog} // 傳遞部落格資料（編輯時使用）
                onSubmit={updatedData => {
                  if (selectedBlog) {
                    updateBlog({ id: selectedBlog.id, updatedData }) // 更新部落格
                  } else {
                    addBlog(updatedData) // 新增部落格
                  }
                }}
                onClose={handleCloseForm} // 關閉表單
              />
            )}

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
  )
}

export default Mid1SupaBlog_xx
