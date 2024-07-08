import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import { getCollection } from 'astro:content';

const projects = await getCollection('projects');

const ProjectSlider = () => {
  return (
    <div className="h-1/2 w-full block lg:hidden mx-auto my-4">
      <Swiper 
        navigation={true} 
        modules={[Navigation]} 
        className="h-1/6 mySwiperProject">
        {projects.map((project) => (
          <SwiperSlide key={project.slug}>
            <div className="p-4 bg-black rounded-3xl text-white text-center">
              <a href={`/projects/${project.slug}`} className="text-lg underline-offset-8 hover:underline transition-ease-in-out">
                {project.data.title}
              </a>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ProjectSlider;
