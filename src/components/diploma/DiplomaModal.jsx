import React, { useState } from 'react';
import Modal from '../Modal';
import { getCollection } from 'astro:content';

const diplomas = await getCollection('diplomas');

const DiplomaModal = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedImageUrl, setSelectedImageUrl] = useState('');

  const openModal = (imageUrl) => {
    setSelectedImageUrl(imageUrl);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedImageUrl('');
  };

  return (
    <section className="text-white h-auto">
      <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
        <div className="mx-auto max-w-lg text-center mb-6">
          <h2 className="text-3xl font-bold sm:text-4xl pb-12" data-aos="fade-up">Cursos certificados</h2>
          <div className="cube pb-8" data-aos="fade-up">
            <ul className='ul-cube'>
              <li>
                "Formación continua                  
              </li>
              <li>
              construyendo
              </li>
              <li>
              un camino
              </li>
              <li>
              de oportunidades"
              </li>
            </ul>
            </div>
        </div>

        
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4 lg:grid-cols-4" data-aos="fade-up" data-aos-delay="400">
          
          {diplomas.map((diploma) => (
            <div
              key={diploma.id}
              className=" diploma flex-col mt-8 rounded-xl border backdrop-blur-2xl p-8 transition border-orange-400/10 shadow-orange-200/10">
              <div>
                  <h2 className="mt-4 text-xl font-bold text-white">{diploma.data.title}</h2>
                  <p className="mt-1 text-sm text-gray-300">
                {diploma.data.description}
                
                  </p>
                  
              </div>
            </div>
            
          ))}
          
        </div>
        
      </div>

      <Modal isOpen={isModalOpen} onClose={closeModal} imageUrl={selectedImageUrl} />

    </section>
  );
  
};


export default DiplomaModal;
