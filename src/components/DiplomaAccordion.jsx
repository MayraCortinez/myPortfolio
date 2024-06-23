import React, { useState, useEffect } from 'react';
import { getCollection } from 'astro:content';


const DiplomaAccordion = () => {
  const [selectedDiploma, setSelectedDiploma] = useState(null);
  const [diplomas, setDiplomas] = useState([]);

  useEffect(() => {
    const fetchDiplomas = async () => {
      const fetchedDiplomas = await getCollection('diplomas');
      setDiplomas(fetchedDiplomas);
    };
    fetchDiplomas();
  }, []);

  const handleDiplomaClick = (id, img) => {
    setSelectedDiploma({ id, img });
  };

  return (
    <section className="text-white h-auto mt-24">
    <h2 class="text-4xl font-bold mb-8 text-center" data-aos="fade-up">Cursos certificados</h2>
      <div className="diploma-container">
        <div className="diploma-list" data-aos="fade-left" data-aos-delay="600">
          {diplomas.map((diploma) => (
            <div
              key={diploma.id}
              className={`diploma-item ${selectedDiploma?.id === diploma.id ? 'active' : ''}`}
              onClick={() => handleDiplomaClick(diploma.id, diploma.data.img)}
            >
              <h2 className="mt-4 text-xl font-bold text-white">{diploma.data.title}</h2>
              <p className="mt-1 text-sm text-gray-300">{diploma.data.description}</p>
            </div>
          ))}
        </div>
        {selectedDiploma && (
          <div className="diploma-image">
            <img src={selectedDiploma.img.url} alt="Selected Diploma" />
          </div>
        )}
      </div>
    </section>
  );
};

export default DiplomaAccordion;
