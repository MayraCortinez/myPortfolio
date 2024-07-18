import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import { getCollection } from 'astro:content';
import ProjectDetail from './ProjectDetail.jsx';

const projects = await getCollection('projects');

const ProjectSlider = () => {

  const [selectedProject, setSelectedProject] = useState(projects[0]);

  const handleSlideChange = (swiper) => {
    setSelectedProject(projects[swiper.activeIndex]);
  };

  return (
    <section className='block lg:hidden'>
    <div className="h-1/2 w-full mx-auto mb-2">
      <Swiper 
        onSlideChange={handleSlideChange}
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
      {selectedProject && (
        <section class="flex flex-col-3 md:flex-col-3 shadow-lg rounded-lg mt-16 h-full">
        <ProjectDetail 
          img={selectedProject.data.img}
          title={selectedProject.data.title}
          description={selectedProject.data.description}
          videoUrl={selectedProject.data.video?.url}
          repoUrl={selectedProject.data.repo?.url}
          deployUrl={selectedProject.data.deploy?.url}
          tags={selectedProject.data.tags}
          client:visible
        />
        </section>
      )}
    </section>
  );
};

export default ProjectSlider;
