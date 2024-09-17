// import React from 'react'
// import ProjectItem from '../components/ProjectItem'
// import basketballImg from '../assets/08FedAAboyssemifinal14_BW.JPG'
// import boxingImg from '../assets/feboxing03_BW.JPG'
// import caraccidentImg from '../assets/exit17S_roll01_BW.JPG'
// import swimmingImg from '../assets/gfqswim03_BW.JPG'


// const Projects = () => {
//   return (
//     <div id='projects' className='max-w-[1040px] m-auto md:pl-20 p-4 py-16'>
//       <h1 className='text-4xl font-bold text-center text-[#001b5e]'>Projects</h1>
//       <p className='text-center py-8'>
//         Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste exercitationem provident recusandae doloribus pariatur, ea fugit quia voluptatem tempore laudantium molestiae harum, eligendi placeat inventore totam aspernatur assumenda enim? Excepturi.
//       </p>
//       <div className='grid sm:grid-cols-2 gap-12'>
//         <ProjectItem img={basketballImg} title="Men's Semi-Finals"/>
//         <ProjectItem img={boxingImg} title='Boxing'/>
//         <ProjectItem img={caraccidentImg} title='Rollover Accident'/>
//         <ProjectItem img={swimmingImg} title='Swimming Trials'/>
//     </div>

//     </div>
//   )
// }

// export default Projects

import React from 'react';
import { Link } from 'react-router-dom';
import ProjectItem from '../components/ProjectItem';
import journalismImg from '/journalism/PHOTOJOURNALISM--01.jpg';
import microImg from '/photomicroscopy/PHOTOMICROSCOPY--01.jpg';
import portraitImg from '/portraits/PORTRAITS--01.jpg';
import landscapeImg from '/landscapes/LANDSCAPES--01.jpg';
import scienceImg from '/science/SCIENCE--02.jpg';
import surgicalImg from '/surgical/SURGICAL PHOTOGRAPHY--02.jpg';

const Projects = () => {
  return (
    <div id='projects' className='max-w-[1040px] m-auto md:pl-20 p-4 py-6'>
      <h1 className='text-4xl font-bold text-center text-[#001b5e]'>Projects</h1>
      <p className='text-center py-8'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste exercitationem provident recusandae doloribus pariatur, ea fugit quia voluptatem tempore laudantium molestiae harum, eligendi placeat inventore totam aspernatur assumenda enim? Excepturi.
      </p>
      <div className='grid sm:grid-cols-2 gap-12'>
        <Link to='/project-gallery/journalism'>
          <ProjectItem img={journalismImg} title="Journalism Photography" />
        </Link>
        <Link to='/project-gallery/photomicroscopy'>
          <ProjectItem img={microImg} title='Micro Photography' />
        </Link>
        <Link to='/project-gallery/portraits'>
          <ProjectItem img={portraitImg} title='Portrait Photography' />
        </Link>
        <Link to='/project-gallery/landscapes'>
          <ProjectItem img={landscapeImg} title='Landscape Photography' />
        </Link>
        <Link to='/project-gallery/science'>
          <ProjectItem img={scienceImg} title='Science Photography' />
        </Link>
        <Link to='/project-gallery/surgical'>
          <ProjectItem img={surgicalImg} title='Surgical Photography' />
        </Link>
      </div>
    </div>
  );
};

export default Projects;


