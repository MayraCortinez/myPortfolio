import React, { useState, useEffect } from 'react';
import Modal from '../Modal';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-cards';
import './styles.css';
import { EffectCards } from 'swiper/modules';
import { getCollection } from 'astro:content';
import { Image } from 'astro:assets';


const DiplomaModal = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedImageUrl, setSelectedImageUrl] = useState('');
  const [diplomas, setDiplomas] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchDiplomas = async () => {
      const fetchedDiplomas = await getCollection('diplomas');
      setDiplomas(fetchedDiplomas);
      setLoading(false);
    };
    fetchDiplomas();
  }, []);

  const openModal = (imageUrl) => {
    setSelectedImageUrl(imageUrl);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedImageUrl('');
  };

  return (
    <section className="text-white flex-col flex-wrap h-auto w-full">
       <h2 class="text-4xl font-bold mb-8 text-center" data-aos="fade-up">Cursos certificados</h2>
      <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16 w-1/2">
        <Swiper
          effect={'cards'}
          grabCursor={true}
          modules={[EffectCards]}
          className="mySwiper"
        >
          {diplomas.map((diploma) => (
            <SwiperSlide key={diploma.id}>
              <div
                className="bg-black shadow-lg diploma flex-col mt-8 rounded-2xl border backdrop-blur-2xl p-8 transition border-orange-400/90"
              >
                <div className="diploma-content">
                  <h2 className="mt-4 text-xl font-bold text-center text-white">{diploma.data.title}</h2>
                  <p className="mt-1 text-sm text-center text-gray-300">
                    {diploma.data.description}
                  </p>
                  <img src='/public/iconDiploma.svg' alt="ícono diploma" />
                  
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <Modal isOpen={isModalOpen} onClose={closeModal} imageUrl={selectedImageUrl} />

      <a href="/about" class="text-xl border-b w-1/2 item-center flex self-center place-self-center justify-self-center m-auto justify-center border-orange-400 mt-4 text-white  hover:bg-gradient-to-r from-red-500 to-orange-500 py-2 px-4 rounded-full" data-aos="fade-right" data-aos-delay="300">
                  Más sobre mí
      </a>
    </section>
  );
};

export default DiplomaModal;
