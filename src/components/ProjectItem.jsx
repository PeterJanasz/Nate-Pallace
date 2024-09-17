// ProjectItem.js

// ...

const ProjectItem = ({ img, title }) => {
  return (
    <div className='relative group hover:bg-gradient-to-r from-gray-200 to-[#001b5e] rounded-xl overflow-hidden cursor-pointer'>
      <div className='w-full h-96 aspect-w-16 aspect-h-9 rounded-xl overflow-hidden group-hover:opacity-10'>
        <img src={img} alt="/" className='w-full h-full object-cover aspect-object' />
      </div>
      <div className='hidden group-hover:flex flex-col items-center justify-center absolute inset-0 text-white rounded-xl'>
        <h3 className='text-2xl font-bold tracking-wider text-center'>
          {title}
        </h3>
      </div>
    </div>
  );
};

export default ProjectItem;





