import { useState, useEffect } from 'react';

// let api_url = `http://localhost:5000/api/card_xx`;

import { supabase } from '../db/clientSupabase';

import Wrapper from '../assets/wrappers/BlogPage_xx';

const SupaClientGetBlog_xx = () => {
  const [name, setName] = useState('Hsingtai Chung');
  const [id, setId] = useState(123456789);
  const [blogs, setBlogs] = useState([]);

  const fetchBlogsFromSupabase = async () => {
    try {
      // const response = await fetch(api_url);
      // const data = await response.json();

      let { data, error } = await supabase.from('card_xx').select('*');

      console.log('blogs data', data);
      setBlogs(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchBlogsFromSupabase();
  }, []);

  return (
    <Wrapper>
      <section className='blogs'>
        <div className='section-title'>
          <h2> Get Blogs Using Supabase Client </h2>
          <h2>
            {name}, {id}
          </h2>
        </div>
        <div className='blogs-center'>
          {blogs.map((item) => {
            const { id, img, remote_url, title, category, descrip } = item;
            return (
              <article key={id} className='blog'>
                <img src={img} alt='Coffee photo' className='img blog-img' />
                <div className='blog-content'>
                  <span>
                    {' '}
                    {category} <i className='fa-solid fa-mug-saucer'></i>
                  </span>
                  <h3>{title}</h3>
                  <p>{descrip}</p>
                  <a href='#'>read more</a>
                </div>
              </article>
            );
          })}
        </div>
      </section>
    </Wrapper>
  );
};

export default SupaClientGetBlog_xx;
