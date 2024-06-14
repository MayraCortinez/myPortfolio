import React, { useState } from 'react';
import VideoComponent from './VideoComponent';

function ProjectDetail({ img, title, description, videoUrl, repoUrl, deployUrl, tags }) {
  const [showDescription, setShowDescription] = useState(true);

  return (
    <article className="container m-0 text-center items-center p-4 pt-4 md:p-6 lg:p-12 bg-gray-400/10 rounded-lg shadow-lg">
      {/* Columna de Título y Enlaces */}
      <div className='flex flex-col items-center justify-center text-white mb-20'>
        <h2 className="text-3xl font-bold mb-8">{title}</h2>
        <div className="flex flex-row gap-4 justify-center items-center">
          <a href={repoUrl} className="text-white justify-items-center flex w-48 bg-blue-500 hover:bg-blue-700 px-4 py-2 rounded">
            <img className="w-6 h-6" src="/icon3.png" alt="ícono github" />
            <span className='w-2 pl-4'>Repositorio</span>
          </a>
          {deployUrl && (
            <a href={deployUrl} className="text-white justify-items-center flex text-center w-48 bg-green-500 hover:bg-green-700 px-4 py-2 rounded">
              <img className="w-6 h-6" src="https://img.icons8.com/?size=100&id=wh2djijxoGnG&format=png&color=000000" alt="ícono deploy" />
              <span className='w-2 pl-4'>Deploy</span>
            </a>
          )}
        </div>
      </div>

      <div className="flex flex-col lg:flex-row lg:space-x-6 justify-between items-start">
        {/* Columna de Video */}
        <div className="bg-black/20 p-4 rounded-lg shadow-inner shadow-black">
          <img
            className="w-full h-64 object-cover rounded md:object-contain"
            src={img.url}
            alt={img.alt}
          />
          {videoUrl && (
            <div className="w-full lg:w-full p-4 mt-4 h-auto md:p-6 flex flex-col justify-between bg-black/20 rounded-lg shadow-md">
              <VideoComponent className="w-full h-full object-cover rounded" url={videoUrl} />
            </div>
          )}
        </div>

        {/* Contenedor para Descripción o Tecnologías */}
        <div className="flex flex-col w-full lg:w-2/3">
          <div className="flex justify-center mb-4">
            <button
              className={`text-xl px-4 py-2 ${showDescription ? 'bg-orange-500' : 'bg-gray-700'} text-white rounded-l-lg`}
              onClick={() => setShowDescription(true)}
            >
              Descripción
            </button>
            <button
              className={`text-xl px-4 py-2 ${!showDescription ? 'bg-orange-500' : 'bg-gray-700'} text-white rounded-r-lg`}
              onClick={() => setShowDescription(false)}
            >
              Tecnologías
            </button>
          </div>

          {showDescription ? (
            <div className="text-sm md:text-xl mb-4 text-white shadow-inner shadow-black rounded-xl p-4">
              {description}
            </div>
          ) : (
            <div className="text-sm md:text-xl mb-4 text-white shadow-inner shadow-black rounded-xl p-4">
              <div className="flex flex-wrap items-center justify-center gap-1">
                {tags.map((tag) => (
                  <p className="cursor-pointer md:w-1/2  tag text-lg mr-2 mb-2 px-3 py-1 hover:bg-orange-500 shadow-md shadow-black rounded-2xl text-white bg-black transition duration-200" key={tag}>
                    <a href={`/tags/${tag}`}>{tag}</a>
                  </p>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </article>
  );
}

export default ProjectDetail;
