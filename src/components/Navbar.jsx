import React from 'react'
import {FaBars,FaTimes,FaGithub,FaLinkedin} from 'react-icons/fa'
import { HiOutlineMail } from 'react-icons/hi'
import {BsFillPersonLinesFill} from 'react-icons/bs'
import logo from '../assets/logo-s.png'
import { useState } from 'react'
import { Link } from 'react-scroll'
const Navbar = () => {
  const [nav,setNav]=useState(false)
  const handleClick=()=>setNav(!nav)
  return (
    <div className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f] text-gray-300 shadow-lg '>
      <div>
        <img src={logo} alt="S" style={{width:'40px'}} />
      </div>
      {/* menu */}
        <ul className=' hidden md:flex'>
          <li ><Link  to="home"  smooth={true}  duration={500} >Home</Link></li>
          <li ><Link  to="about"  smooth={true}  duration={500} >About</Link></li>
          <li ><Link  to="skills"  smooth={true}  duration={500} >Skills</Link></li>
          <li ><Link  to="work"  smooth={true}  duration={500} >Work</Link></li>
          <li ><Link  to="contact"  smooth={true}  duration={500} >Contact</Link></li>
        </ul>

      {/* hamburger */}
      <div className='md:hidden z-10' onClick={handleClick}>
        {!nav ? <FaBars/> : <FaTimes/>}
      </div>

      {/* mobile-menu */}
      <ul className={!nav?'hidden':'absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center' }>
          <li className='py-6 text-4xl'  onClick={handleClick}><Link  to="home"  smooth={true}  duration={500} >Home</Link></li>
          <li className='py-6 text-4xl' onClick={handleClick} ><Link  to="about"  smooth={true}  duration={500} >About</Link></li>
          <li className='py-6 text-4xl' onClick={handleClick} ><Link  to="skills"  smooth={true}  duration={500} >Skills</Link></li>
          <li className='py-6 text-4xl' onClick={handleClick} ><Link  to="work"  smooth={true}  duration={500} >Work</Link></li>
          <li className='py-6 text-4xl' onClick={handleClick} ><Link  to="contact"  smooth={true}  duration={500} >Contact</Link></li>
        </ul>

      {/* social icon */}
      <div className='hidden lg:flex fixed flex-col top-[35%] left-0 '>
        <ul>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] bg-blue-600'>
            <a href="https://www.linkedin.com/in/shaurya-singh-1139b7213/" className='flex justify-between items-center w-full text-gray-300  '>LinkedIn <FaLinkedin size={30}/></a>
          </li>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] bg-[#333333]'>
            <a href="https://github.com/dashboard" className='flex justify-between items-center w-full text-gray-300  '>Github <FaGithub size={30}/></a>
          </li>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] bg-[#6fc2b0]'>
            <a href="/" className='flex justify-between items-center w-full text-gray-300'><Link  to="contact"  smooth={true}  duration={500} >Email</Link> <HiOutlineMail size={30}/></a>
          </li>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] bg-[#565f69]'>
            <a href="/" className='flex justify-between items-center w-full text-gray-300  '>Resume <BsFillPersonLinesFill size={30}/></a>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Navbar

