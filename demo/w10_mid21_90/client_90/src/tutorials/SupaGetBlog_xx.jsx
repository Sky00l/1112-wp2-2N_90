import { useState, useEffect } from 'react';
import axios from 'axios';

import Wrapper from '../assets/wrappers/BlogPage_xx';

let api_url =
  'https://sldvcsgcmhhgtrjjccxd.supabase.co/rest/v1/card_xx?select=*';

const SupaGetBlog_xx = () => {
  const [name, setName] = useState('Hsingtai Chung');
  const [id, setId] = useState(123456789);
  const [blogs, setBlogs] = useState([]);

  const fetchBlogsFromSupabase = async () => {
    try {
      const response = await axios.get(api_url, {
        headers: {
          apikey:
            'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNsZHZjc2djbWhoZ3RyampjY3hkIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODMwODE3MjQsImV4cCI6MTk5ODY1NzcyNH0.JSxiJyqoCFyO5fz6HG--pht_kMFBKTACBbG732aX2bI',
          Authorization:
            'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNsZHZjc2djbWhoZ3RyampjY3hkIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODMwODE3MjQsImV4cCI6MTk5ODY1NzcyNH0.JSxiJyqoCFyO5fz6HG--pht_kMFBKTACBbG732aX2bI',
        },
      });
      console.log('blogs data', response.data);
      setBlogs(response.data);
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
          <h2> Get Blogs Using Bash </h2>
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

export default SupaGetBlog_xx;
