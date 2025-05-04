import React, {useState, useEffect, useRef} from 'react'
import { Link } from 'react-scroll'
import Logo from '../assets/icons/image 1.png'
import { RxHamburgerMenu } from "react-icons/rx";
import { IoCloseOutline } from "react-icons/io5";
const NavBar = () => {
   const [activeLink, setActiveLink] = useState('');
   const [menuOpen, setMenuOpen] = useState(false);
   const navRef = useRef()
   const handleSetActive = (link) => {
       setActiveLink(link)
   }
   const closeMenubar = () => {
       setMenuOpen(false)
   }
   const openMenubar = () =>{
    if (window.innerWidth < 1024) { // Check if the screen width is less than 1024px (mobile devices)
        setMenuOpen(!menuOpen);
      }
}
const handleClickOutside = (event) => {
    if(navRef.current && !navRef.current.contains(event.target)){
        closeMenubar()
    }
}
//The mousedown event is used to detect when a mouse button is pressed down. 
useEffect(()=> {
    if(menuOpen){
        document.addEventListener("mousedown", handleClickOutside)
    } else{
        document.removeEventListener("mousedown", handleClickOutside)
    }
    return()=>{
        document.removeEventListener("mousedown", handleClickOutside)
    }
},[menuOpen])
// The return statement provides a cleanup function that removes the handleClickOutside event listener when the component unmounts or before the effect re-runs.
return (
<nav className='bg-white shadow fixed z-50 right-0 left-0 w-full'>
    <div className='w-full px-6 lg:px-10 '>
       <div className="flex justify-between h-20 items-center">
       <div className="flex-shrink-0">
        <Link
          className="text-xl font-bold text-gray-600 flex items-center cursor-pointer"
          to='hero'
        >
          <img src={Logo} alt="logo" className='animate-pulse'/>
          <span >Olajide,</span>
        </Link>
        </div>
        <div className="lg:hidden text-2xl flex items-center cursor-pointer transition-all duration-300 rotate" 
        onClick={openMenubar}>
            {menuOpen ? <IoCloseOutline/> : <RxHamburgerMenu />}
        </div>
        <div className={`lg:static absolute bg-white top-16 ${
  menuOpen ? 'block opacity-100 w-full h-screen drop-shadow-lg rounded-md right-0 p-8 ' : 'hidden opacity-0 top-[100%]'
} lg:opacity-100 lg:flex lg:items-center lg:w-auto  font-bold  z-50 gap-5`}  ref={navRef}>
           <div className="flex flex-col lg:flex-row lg:space-x-12  gap-8 lg:gap-0">
           <Link to='hero' className={`border-b border-gray-200 md:border-none  py-2 mb-0 text-sm lg:text-lg font-medium cursor-pointer ${activeLink === 'hero' ? "text-purple-500" : "text-gray-800 hover:text-gray-500"}`}
           onClick={()=> {handleSetActive('hero'); closeMenubar() }}>Home</Link>
           <Link to='portfolio' className={`py-2 border-b border-gray-200 md:border-none  mb-0 text-sm lg:text-lg font-medium cursor-pointer ${activeLink === 'portfolio' ? "text-purple-500" : "text-gray-800 hover:text-gray-500"}`}
           onClick={()=> {handleSetActive('portfolio'); closeMenubar()}}>Portfolio</Link>
           <Link 
           className={`border-b border-gray-200 md:border-none  py-2 mb-0 text-sm lg:text-lg font-medium cursor-pointer ${activeLink === 'about' ? "text-purple-500" : "text-gray-800 hover:text-gray-500"}`}
           onClick={()=> {handleSetActive('about'); closeMenubar() }} to='about'
            >About me</Link>
           <Link className={`border-b border-gray-200 md:border-none  py-2 mb-0 text-sm lg:text-lg font-medium cursor-pointer ${activeLink === 'testimonial' ? "text-purple-500" : "text-gray-800 hover:text-gray-500"}`}
           onClick={()=> {handleSetActive('testimonial'); closeMenubar() }} to='testimonial'>Testimonial</Link>
            <div className="block lg:hidden">
            <Link className={`border  px-3 py-2 text-lg font-medium rounded-md cursor-pointer ${activeLink === 'contact' ? 'bg-purple-500 text-white': 'border-purple-500 text-purple-500 bg-white '}`} onClick={()=> {handleSetActive('contact'); closeMenubar() }} to='contact'>Contact Me</Link>
        </div>
           </div>
        </div>
        <div className="hidden lg:block">
            <Link className={`border  px-3 py-2 text-lg font-medium rounded-md cursor-pointer ${activeLink === 'contact' ? 'bg-purple-500 text-white': 'border-purple-500 text-purple-500 bg-white '}`} onClick={()=> handleSetActive('contact')} to='contact'>Contact Me</Link>
        </div>
       </div>
    </div>
</nav>
)
}

export default NavBar
