import React from 'react'
import catalogue from './assets/blog/catalogue.jpg'
import summer from './assets/blog/countdown.jpg'
import promo from './assets/blog/promo.jpg'
import { AiOutlineMessage } from 'react-icons/ai';

const MiniBlog = () => {

    const blogs = [
        {
            id: 1,
            image: `${catalogue}`,
            name: 'LADIES',
            title: 'CATALOGUE MODE',
            author: 'Ugbe Adie',
            date: 'August 22, 2022',
            comments: '25'
        },
        {
            id: 2,
            image: `${summer}`,
            name: 'WINTER',
            title: 'WINTER TRENDING 2022',
            author: 'Akomaye Adie',
            date: 'April 9, 2022',
            comments: '19'
        },
        {
            id: 3,
            image: `${promo}`,
            name: 'PROMO',
            title: 'PURCHASED PROMO SECTION',
            author: 'Chino Adie',
            date: 'June 15, 2022',
            comments: '19'
        },
    ]
    //TODO: set a slider for mobile

  return (
    <div className='blog-container'>

        <div class="blog-head">
            <h3><span>LATEST FROM BLOG</span></h3>
            <p>The freshest and most exciting news</p>
        </div>
        <div className='blog-imgs'>
        {blogs.map((blog) => (
            <div className='blog-img'>
                        <img src={blog.image} alt={blog.name}/>

                    <div className='blog-text'>
                        <p className='name'>{blog.name}</p>
                        <h3 className='title'>{blog.title}</h3>
                        <p className='desc'>
                            It is a long established fact that by 
                            the readable content of a page when 
                            looking at its layout.
                       </p>
                       <div className='author_comment'>
                            <p className='author'>by <span>{blog.author}</span> on {blog.date}</p>
                            <div className='comment'>
                                <AiOutlineMessage/>
                                <p>{blog.comments}</p>
                            </div>
                       </div>
                    </div>

            </div>
        ))}
        </div>

    </div>    
  )
}

export default MiniBlog

                    //     <div className='blog-text'>
                    //     <p className='name'>{blog.name}</p>
                    //     <h3 className='title'>{blog.title}</h3>
                    //     <p className='desc'>
                    //         It is a long established fact that by 
                    //         the readable content of a page when 
                    //         looking at its layout.
                    //     </p>
                    //     <div className='author_comment'>
                    //         <p className='author'>by <span>{blog.author}</span> on {blog.date}</p>
                    //         <div className='comment'>
                    //             <AiOutlineMessage/>
                    //             <p>{blog.comments}</p>
                    //         </div>
                    //     </div>    
                    // </div>