import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
//react icons
import {FaBars, FaFacebook, FaTwitter, FaXmark} from "react-icons/fa6";
import { FaDribbble } from "react-icons/fa";
import Model from './Model';
import AddBlog from './AddBlog';

const Navbar = () => {

  const [isMenuOpen,setIsMenuOpen]=useState(false);
  const [isAddblogOpen,setAddblogOpen]=useState(false);
  const [isModelOpen,setIsModelOpen]=useState(false);
  const [isLogin, setIsLogin] = useState(false);

  const toggleMenu=()=>{
    setIsMenuOpen(!isMenuOpen);
  }

  //navitems
  const navItems=[
    {path:"/",link:"Home"},
    {path:"/service",link:"Service"},
    {path:"/about",link:"About"},
    {path:"/blogs",link:"Blogs"},
    {path:"/contact",link:"Contact"},
  ]

  const openModel=()=>{
    setIsMenuOpen(true);
  }

  const closeModel=()=>{
    setIsMenuOpen(false);
    setIsLogin(!isLogin)
    console.log(isLogin)
  }
  const openAddblog=()=>{
    setAddblogOpen(true);
  }

  const closeAddblog=()=>{
    setAddblogOpen(false);
  }

  return (
    <header className='bg-black text-white fixed top-0 left-0 right-0'>
      <nav className='px-4 py-4 max-w-7xl mx-auto flex justify-between items-center'>
          <a href="/" className='text-xl font-bold text-white'>Design <span className='text-orange-500'>DK</span></a>

          <ul className='md:flex gap-12 text-lg hidden'>
            {
              navItems.map(({path,link})=><li className='text-white' key={path}>
                <NavLink 
                  className={({isActive,isPending})=>
                  isActive?"active": isPending?"pending":""
                  }

                to={path}>{link}</NavLink>
              </li>)
            }
          </ul>

          <div className='text-white lg:flex gap-4 items-center hidden'>
            <a href="/" className='hover:text-orange-300'><FaFacebook/></a>
            <a href="/" className='hover:text-orange-300'><FaDribbble/></a>
            <a href="/" className='hover:text-orange-300'><FaTwitter/></a>
            <button onClick={() =>{openModel();}} className={`bg-orange-500  px-6 py-2 font-medium rounded hover:bg-white hover:text-orange-500 transition-all duration-200  ease-in`}>{isLogin ? "Logout" :"Login"}</button>
            <button onClick={openAddblog} className='bg-orange-500 px-6 py-2 font-medium rounded hover:bg-white hover:text-orange-500 transition-all duration-200  ease-in'>Add Blog</button>
          </div>


          <Model isOpen={isMenuOpen} onClose={closeModel}/>
          <AddBlog isOpen={isAddblogOpen} onClose={closeAddblog}/>

            <div className='md:hidden'>
              <button onClick={toggleMenu} className='cursor-pointer'>
                {
                  isMenuOpen? <FaXmark className='w-5 h-5'/>:<FaBars className='w-5 h-5'/>
                }
                

              </button>
            </div>
        </nav>

      <div>
        <ul className={`md:hidden gap-12 text-lg block space-y-4 px-4 py-6 mt-14 bg-white ${isMenuOpen?"fixed top-0 left-0 w-full transition-all ease-out duration-150":"hidden"}`}>
          {
            navItems.map(({path,link})=><li className='text-black' key={path}>
              <NavLink onClick={toggleMenu} to={path}>{link}</NavLink>
            </li>)
          }
        </ul>
      </div>

    </header>
  )
}

export default Navbar
