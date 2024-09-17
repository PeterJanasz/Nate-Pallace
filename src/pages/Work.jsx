import React from 'react'
import WorkItem from '../components/WorkItem'

const data = [
    {
        year: 2020,
        title: 'Content Creater',
        duration: '3 year',
        details: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Exercitationem error nesciunt excepturi molestiae, tenetur impedit maxime laborum nam. Exercitationem sapiente aspernatur recusandae eos repudiandae inventore eaque, saepe dicta numquam quo?'
    },
    {
        year: 2020,
        title: 'Content Creater',
        duration: '3 year',
        details: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Exercitationem error nesciunt excepturi molestiae, tenetur impedit maxime laborum nam. Exercitationem sapiente aspernatur recusandae eos repudiandae inventore eaque, saepe dicta numquam quo?'
    },
    {
        year: 2020,
        title: 'Content Creater',
        duration: '3 year',
        details: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Exercitationem error nesciunt excepturi molestiae, tenetur impedit maxime laborum nam. Exercitationem sapiente aspernatur recusandae eos repudiandae inventore eaque, saepe dicta numquam quo?'
    },
]
const Work = () => {
    return (
        <div id='work' className='max-w-[1040px] m-auto md:pl-20 p-4 py-16'>
            <h1 className='text-4xl font-bold text-center text-[#001b5e]'>Work</h1>
            {data.map((item, id) => (
                <WorkItem
                    key={id}
                    year={item.year}
                    title={item.title}
                    duration={item.duration}
                    details={item.details}
                />
            ))}
        </div>
    )
}

export default Work