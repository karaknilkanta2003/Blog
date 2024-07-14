import React from 'react'
import BlogPage from '../Components/BlogPage'
import { Blogcontext } from '../context/Context'
import { useContext } from 'react'
const Blogs = () => {
  const cont = useContext(Blogcontext)

  return (
    <div>
      <div className='py-40 bg-black text-center text-white px-4'>
        <h2 className='text-5xl lg:text-7xl leading-snug font-bold mb-5'>Blog Page</h2>
      </div>

      <div className='max-w-7xl my-8 mx-auto flex flex-col items-center justify-center space-y-3'>
        <p className='text-center font-semibold text-3xl'>{cont.blogtitle}</p>
        <img src={cont.blogimg}/>
        <p>Author: {cont.blogauthor} {cont.blogdate}</p>
        <p className='mx-4 font-mono text-justify'>{cont.blogcontent}</p>
      </div>

    </div>
  )
}

export default Blogs
