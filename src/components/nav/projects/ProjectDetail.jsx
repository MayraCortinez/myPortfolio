import React, { useState } from 'react';
import VideoComponent from '../../VideoComponent.jsx';


function ProjectDetail({ img, title, description, videoUrl, repoUrl, deployUrl, tags }) {
  const [showDescription, setShowDescription] = useState(true);

  return (
    <article className="container mx-0 mb-6 text-center items-start pt-3 p-4 md:p-6 lg:p-12 bg-gray-400/10 rounded-lg shadow-inner shadow-orange-500">
      {/* Columna de Título y Enlaces */}
      <div className='flex flex-col items-center justify-center lg:w-1/2 text-white my-6 mx-auto'>
        <h2 className="text-3xl font-bold mb-8">{title}</h2>
        <div className="flex flex-col md:flex-row mb-3 gap-3 justify-center items-center">
        {repoUrl && (
          <a href={repoUrl} className="text-white flex items-center justify-center text-lg w-48 bg-blue-500 hover:bg-blue-700 p-2 rounded-full">
            <img className="w-6 h-6 mr-2" src="/icon3.png" alt="ícono github" />
            <span>Repositorio</span>
          </a>
        )}
          {deployUrl && (
            <a href={deployUrl} className="text-white flex items-center text-center text-lg w-48 bg-green-500 hover:bg-green-700 p-2 rounded-full">
              <img className="w-6 h-6 mr-2" src="https://img.icons8.com/?size=100&id=wh2djijxoGnG&format=png&color=000000" alt="ícono deploy" />
              <span className=''>Deploy</span>
            </a>
          )}
        </div>
      </div>

      <div className="flex flex-col h-full lg:flex-row lg:space-x-6 justify-start items-start">
        {/* Columna de Video/Imagen */}
        <div className="bg-black/20 rounded-lg shadow-inner h-full justify-self-start lg:w-1/2 shadow-black">
          {img && (
            <img
              className="w-96 h-64 p-4 object-contain rounded md:object-cover"
              src={img.url}
              alt={img.alt}
            />
          )}
          {videoUrl && (
            <div className="w-full h-full p-4 my-4 md:p-6 flex flex-col justify-between bg-black/20 rounded-lg shadow-md">
              <VideoComponent className="w-full object-cover rounded" url={videoUrl} />
            </div>
          )}
        </div>

        {/* Contenedor para Descripción o Tecnologías */}
        <div className="flex flex-col w-full mt-3 lg:mt-0 lg:w-1/2">
          <div className="flex justify-start">
            <button
              className={`text-xl py-1 ${showDescription ? 'bg-gradient-to-t from-black to-orange-500' : 'bg-gradient-to-t from-black to-gray-700'} text-white rounded-l-lg`}
              onClick={() => setShowDescription(true)}
            >
              Descripción
            </button>
            <button
              className={`text-xl py-1 ${!showDescription ? 'bg-gradient-to-t from-black to-orange-500' : 'bg-gradient-to-t from-black to-gray-700'} text-white rounded-r-lg`}
              onClick={() => setShowDescription(false)}
            >
              Tecnologías
            </button>
          </div>

          <div className="relative">
            <div className={`absolute inset-0 transition-opacity duration-300 ${showDescription ? 'opacity-100' : 'opacity-0'} ${showDescription ? 'block' : 'hidden'}`}>
              <p className="text-sm md:text-xl mb-4 text-white shadow-inner shadow-black rounded-xl p-4">
                {description}
              </p>
            </div>
            <div className={`absolute inset-0 transition-opacity duration-300 ${showDescription ? 'opacity-0' : 'opacity-100'} ${showDescription ? 'hidden' : 'block'}`}>
              <div className="text-sm md:text-xl mb-4 text-white shadow-inner shadow-black rounded-xl p-4">
                <div className="flex flex-wrap items-center justify-center">
                  {tags.map((tag) => (
                    <p className="cursor-pointer md:w-1/3 text-lg m-1 py-1 shadow-md shadow-black rounded-2xl text-white bg-black tags transition duration-200" key={tag}>
                      <a href={`/tags/${tag}`}>{tag}</a>
                    </p>
                  ))}
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </article>
  );
}

export default ProjectDetail;
