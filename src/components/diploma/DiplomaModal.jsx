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
        <div className="mx-auto max-w-lg text-center">
          <h2 className="text-3xl font-bold sm:text-4xl">Cursos certificados</h2>
          <h4 className="mt-4 text-gray-300 text-xl font-light">
            "Formación continua: construyendo un camino de oportunidades"
          </h4>
        </div>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4 lg:grid-cols-4">
          {diplomas.map((diploma) => (
            <div
              key={diploma.id}
              className="mt-8 rounded-xl border hover:bg-black/10 cursor-pointer border-gray-800 p-8 shadow-xl transition hover:border-orange-500/10 hover:shadow-orange-500/10"
              onClick={() => openModal(diploma.data.img.url)} 
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="size-10 text-orange-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M12 14l9-5-9-5-9 5 9 5z" />
                <path
                  d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
                />
              </svg>

              <h2 className="mt-4 text-xl font-bold text-white">{diploma.data.title}</h2>
              <p className="mt-1 text-sm text-gray-300">
                {diploma.data.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      <Modal isOpen={isModalOpen} onClose={closeModal} imageUrl={selectedImageUrl} />
    </section>
  );
};


export default DiplomaModal;
