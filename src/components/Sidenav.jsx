// import React, { useState } from 'react'
// import { AiOutlineMenu, AiOutlineHome, AiOutlineProject, AiOutlineMail } from 'react-icons/ai'
// import { BsPerson } from 'react-icons/bs'
// import { GrProjects } from 'react-icons/gr'
// import { Link } from 'react-router-dom';


// const sidenav = () => {

//     const [nav, setNav] = useState(false)
//     const handleNav = () => {
//         setNav(!nav)
//     }

//     return (
//         <div>
//             <AiOutlineMenu onClick={handleNav} className='fixed text-stone-300 top-4 right-4 z-[99] md:hidden' />
//             {
//                 nav ? (
//                     <div className='fixed w-full h-screen bg-white/50 flex flex-col justify-center items-center z-20'>
//                         <a onClick={handleNav} href="#main" className='w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200'>
//                             <AiOutlineHome size={20} />
//                             <span className='pl-4'>Home</span>
//                         </a>
//                         <a onClick={handleNav} href="#work" className='w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200'>
//                             <GrProjects size={20} />
//                             <span className='pl-4'>Work</span>
//                         </a>
//                         <a onClick={handleNav} href="#projects" className='w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200'>
//                             <AiOutlineProject size={20} />
//                             <span className='pl-4'>Projects</span>
//                         </a>
//                         <a onClick={handleNav} href="#main" className='w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200'>
//                             <BsPerson size={20} />
//                             <span className='pl-4'>Resume</span>
//                         </a>
//                         <a onClick={handleNav} href="#contact" className='w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200'>
//                             <AiOutlineMail size={20} />
//                             <span className='pl-4'>Contact</span>
//                         </a>
//                     </div>
//                 ) : (
//                     ""
//                 )}
//                 <div className='md:block hidden fixed top-[15%] z-10'>
//                     <div className='flex flex-col'>
//                         <a href='#main' className='rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-10 my-6 p-4 flex flex-col justify-center items-center cursor-pointer hover:scale-110 ease-in duration 300'>
//                             <AiOutlineHome size={20} />
//                             <span className='pt-1'>Home</span>
//                         </a>
//                         <a href='#work' className='rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-10 my-6 p-4 flex flex-col justify-center items-center cursor-pointer hover:scale-110 ease-in duration 300'>
//                             <GrProjects size={20} />
//                             <span className='pt-1'>Work</span>
//                         </a>
//                         <a href='#projects' className='rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-10 my-6 p-4 flex flex-col justify-center items-center cursor-pointer hover:scale-110 ease-in duration 300'>
//                             <AiOutlineProject size={20} />
//                             <span className='pt-1'>Projects</span>
//                         </a>
//                         <a href='#main' className='rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-10 my-6 p-4 flex flex-col justify-center items-center cursor-pointer hover:scale-110 ease-in duration 300'>
//                             <BsPerson size={20} />
//                             <span className='pt-1'>Resume</span>
//                         </a>
//                         <a href='#contact' className='rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-10 my-6 p-4 flex flex-col justify-center items-center cursor-pointer hover:scale-110 ease-in duration 300'>
//                             <AiOutlineMail size={20} />
//                             <span className='pt-1'>Contact</span>
//                         </a>
//                     </div>
//                 </div>

//         </div>
//     );
// };

// export default sidenav

import React, { useState } from 'react';
import { AiOutlineMenu, AiOutlineHome, AiOutlineProject, AiOutlineMail } from 'react-icons/ai';
import { BsPerson } from 'react-icons/bs';
import { GrProjects } from 'react-icons/gr';
import { Link } from 'react-router-dom';

const Sidenav = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div>
      <h3 className='fixed text-xs text-stone-300 p-1 right-1 z-[99] md:hidden' >
        Menu
      <AiOutlineMenu onClick={handleNav} className='fixed text-stone-300 top-5 right-4 z-[99] md:hidden' />
      </h3>
      {nav ? (
        <div className='fixed w-full h-screen bg-white/50 flex flex-col justify-center items-center z-20'>
          <Link onClick={handleNav} to="/" className='w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200'>
            <AiOutlineHome size={20} />
            <span className='pl-4 '>Home</span>
          </Link>

          {/* <Link onClick={handleNav} to="/work" className='w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200'>
            <GrProjects size={20} />
            <span className='pl-4 '>Work</span>
          </Link> */}

          <Link onClick={handleNav} to="/projects" className='w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200'>
            <GrProjects size={20} />
            <span className='pl-4 '>Projects</span>
          </Link>

          <Link onClick={handleNav} to="/resume" className='w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200'>
            <BsPerson size={20} />
            <span className='pl-4 '>Resume</span>
          </Link>

          {/* <Link onClick={handleNav} to="/contact" className='w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200'>
            <AiOutlineMail size={20} />
            <span className='pl-4 '>Contact</span>
          </Link> */}
        </div>
      ) : (
        ''
      )}
      <div className='md:block hidden fixed top-[50%] transform -translate-y-1/2 z-10'>
        <div className='flex flex-col'>
          <Link to='/' className='rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-10 my-6 p-4 flex flex-col justify-center items-center cursor-pointer hover:scale-110 ease-in duration 300'>
            <AiOutlineHome size={20} />
            <span className='pt-1'>Home</span>
          </Link>

          {/* <Link to='/Work' className='rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-10 my-6 p-4 flex flex-col justify-center items-center cursor-pointer hover:scale-110 ease-in duration 300'>
            <GrProjects size={20} />
            <span className='pt-1'>Work</span>
          </Link> */}

          <Link to='/Projects' className='rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-10 my-6 p-4 flex flex-col justify-center items-center cursor-pointer hover:scale-110 ease-in duration 300'>
            <GrProjects size={20} />
            <span className='pt-1'>Projects</span>
          </Link>

          <Link to='#main' className='rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-10 my-6 p-4 flex flex-col justify-center items-center cursor-pointer hover:scale-110 ease-in duration 300'>
            <BsPerson size={20} />
            <span className='pt-1'>Resume</span>
          </Link>

          {/* <Link to='#contact' className='rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-10 my-6 p-4 flex flex-col justify-center items-center cursor-pointer hover:scale-110 ease-in duration 300'>
            <AiOutlineMail size={20} />
            <span className='pt-1'>Contact</span>
          </Link> */}
        </div>
      </div>
    </div>
  );
};

export default Sidenav;

