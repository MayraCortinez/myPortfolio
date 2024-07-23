import React, { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import { getCollection } from 'astro:content';
import { EffectCoverflow, Pagination } from 'swiper/modules';


const SoftSkillsCarousel = () => {
  const [softSkills, setSoftSkills] = useState([]);

  useEffect(() => {
    const fetchSoftSkills = async () => {
      const fetchedSoftSkills = await getCollection('softSkills');
      setSoftSkills(fetchedSoftSkills);
    };
    fetchSoftSkills();
  }, []);

  return (
    <>
        <section className="text-white h-auto mt-24 ">
    <div className="relative rounded-xl">
      <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={'auto'}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 2,
          slideShadows: true,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination]}
      >
        {softSkills.map((softSkill) => (
          <SwiperSlide className='swiper-lide rounded-xl' key={softSkill.id}>
            <div className="relative rounded-xl">
              <div className="rounded-xl absolute left-0 top-0 p-4 bg-gradient-to-b pb-96 from-yellow-900 to-transparent text-white">
                <h2 className="text-2xl">{softSkill.data.title}</h2>
                <h3 className="text-lg font-medium">{softSkill.data.description}</h3>
              </div>
              <div className='h-96 w-full rounded-lg'>
              <img
                src={softSkill.data.img.url}
                alt={softSkill.data.title}
                className="w-full h-full object-cover rounded-lg"
              />
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
    </section>
    </>
  );
};

export default SoftSkillsCarousel;


