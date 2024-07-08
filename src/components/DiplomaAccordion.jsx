import React, { useState, useEffect } from 'react';
import { getCollection } from 'astro:content';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-cards';
import { EffectCards } from 'swiper/modules';

const DiplomaAccordion = () => {
  const [selectedDiploma, setSelectedDiploma] = useState(null);
  const [diplomas, setDiplomas] = useState([]);

  useEffect(() => {
    const fetchDiplomas = async () => {
      const fetchedDiplomas = await getCollection('diplomas');
      setDiplomas(fetchedDiplomas);
      if (fetchedDiplomas.length > 0) {
        setSelectedDiploma(fetchedDiplomas[0].data);
      }
    };
    fetchDiplomas();
  }, []);

  const handleSlideChange = (swiper) => {
    const activeIndex = swiper.activeIndex;
    setSelectedDiploma(diplomas[activeIndex].data);
  };

  return (
    <section className="text-white h-auto mt-24">
      <h2 className="text-4xl font-bold mb-6 text-center" data-aos="fade-up">Cursos certificados</h2>
      <div className="diploma-container flex">
        <div className="w-full md:w-1/2" data-aos="fade-left" data-aos-delay="600">
          <Swiper
            effect={'cards'}
            grabCursor={true}
            modules={[EffectCards]}
            className="mySwiper"
            onSlideChange={handleSlideChange}
          >
            {diplomas.map((diploma) => (
              <SwiperSlide key={diploma.id}>
                <div className="bg-black diploma-item p-4 rounded-xl border backdrop-blur-2xl transition border-orange-400/90 shadow-orange-200/70">
                  <img src={diploma.data.img.url} alt={diploma.data.title} className="rounded-lg" />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <div className="py-2 w-full md:w-1/2 flex flex-col items-center justify-center">
          {selectedDiploma && (
            <>
              <p className="text-2xl text-white rounded-lg">{selectedDiploma.title}</p>
              <p className="mt-1 text-md text-gray-300 rounded-lg">{selectedDiploma.description}</p>
            </>
          )}
        </div>
      </div>
    </section>
  );
};

export default DiplomaAccordion;


