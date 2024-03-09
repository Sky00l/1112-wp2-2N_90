import { useState, useEffect } from 'react'
import axios from 'axios'
// let api_url = `http://localhost:5000/api/card_xx`;

let api_url =
  'https://ophlhndtmgrbqpyaatag.supabase.co/rest/v1/card2_90?id=eq.12'

// import { supabase } from '../db/clientSupabase'

const SupaPatchBlog_90 = () => {
  const [name, setName] = useState('林泓君')
  const [id, setId] = useState(207410290)
  const [blogs, setBlogs] = useState([])
  const fetchBlogsFromSupabase = async () => {
    try {
      // let { data, error } = await supabase.from('card2_90').select('*')

      const response = await axios.patch(
        api_url,
        {
          title: '林泓君'
        },
        {
          headers: {
            apikey:
              'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im9waGxobmR0bWdyYnFweWFhdGFnIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzY0NTkzNDcsImV4cCI6MTk5MjAzNTM0N30.ZuXrcaVq24uc7FVKJ-pHR3ViZ5-FwPRtUMziGxayW7Y',
            Authorization:
              'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im9waGxobmR0bWdyYnFweWFhdGFnIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzY0NTkzNDcsImV4cCI6MTk5MjAzNTM0N30.ZuXrcaVq24uc7FVKJ-pHR3ViZ5-FwPRtUMziGxayW7Y',
            'Content-Type': 'application/json'
          }
        }
      )
      console.log('blogs data', response.data)
      // setBlogs(data)
    } catch (error) {
      console.log(error)
    }
  }
  useEffect(() => {
    fetchBlogsFromSupabase()
  }, [])
  return (
    <section className='blogs'>
      <div className='section-title'>
        <h2> Get Blogs Using Bash </h2>
        <h3>
          {name}, {id}
        </h3>
      </div>
      <div className='blogs-center'>
        {blogs.map(item => {
          const { id, img, remote_url, title, category, descrip } = item
          return (
            <article key={id} className='blog'>
              <img src={img} alt='Coffee photo' className='img blog-img' />
              <div className='blog-content'>
                <span>
                  {category} <i className='fa-solid fa-mug-saucer'></i>
                </span>
                <h3>{title}</h3> <p>{descrip}</p> <a href='#'>read more</a>
              </div>
            </article>
          )
        })}
      </div>
    </section>
  )
}
export default SupaPatchBlog_90
