// pages/ProjectGallery.jsx
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import SlideShow from '../components/SlideShow';

const ProjectGallery = () => {
  const { projectId } = useParams();
  const [projectData, setProjectData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`/${projectId}.json`);
        const data = await response.json();
        console.log('Fetched data:', data);
        setProjectData(data);
      } catch (error) {
        console.error('Error fetching project data:', error);
      }
    };

    console.log('Current projectId:', projectId);

    fetchData();
  }, [projectId]);

  useEffect(() => {
    console.log('Current projectData:', projectData);
  }, [projectData]);

  if (!projectData) {
    return <div>Loading...</div>;
  }

  return (
    <div className='max-w-[1040px] m-auto md:pl-20 p-4 py-4'>
      <h1 className="capitalize text-4xl font-bold text-center text-[#001b5e]">{projectId}</h1>
      <SlideShow images={projectData.images} descriptions={projectData.descriptions} />
    </div>
  );
};

export default ProjectGallery;
