import React from 'react'
import './Blog.css'
import { AiOutlineArrowRight } from 'react-icons/ai';
import catalogue from '../assets/blog/blogpost1.jpg'
import summer from '../assets/blog/blogpost2.jpg'
import promo from '../assets/blog/blogpost3.jpg'
import winter from '../assets/blog/blogpost4.jpg'
import Social from '../Social'
import Footer from '../Footer'

const Blog = () => {

  const blogs = [
    {
      id: '1',
      image: `${catalogue}`,
    },
    {
      id: '1',
      image: `${summer}`,
    },
    {
      id: '1',
      image: `${promo}`,
    },
    {
      id: '1',
      image: `${winter}`,
    },
  ]

  return (
    <>
      <div className='head'>BLOG</div>
      <section className='blog'>
        {blogs.map((blog) => (
          <div key={blog.id} className='blog-card'>
              <div className='blog-img'>

              <img src={blog.image} alt='blog img'/>

            <div className='blog-title'>
              <p>
              Vivamus sed nunc in arcu cursus mollis 
              quis et orci. Interdum et
              </p>
            </div>

            <div className='hover-text'>
              <h3>
              Vivamus sed nunc in arcu cursus mollis 
              quis et orci. Interdum et
              </h3>
              <p>Lorem ipsum dolor sit amet, consectetur 
              adipiscing elit. Fusce enim nulla, mollis 
              eu metus in, sagittis fringilla tortor. 
              Phasellus purus dignissim convallis.
              </p>
              <h6>CONTINUE READING <span><AiOutlineArrowRight/></span> </h6>
            </div>
          </div>
        </div>
        ))}
      </section>
      <Social/>
        <Footer/>
    </>
  )
}

export default Blog