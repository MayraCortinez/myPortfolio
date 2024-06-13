import React from 'react';
import VideoComponent from './VideoComponent';

function ProjectDetail({ img, title, description, videoUrl, repoUrl, deployUrl, tags }) {
  return (
    <article className="container m-0 text-center items-center p-4 pt-4 md:p-6 lg:p-12 bg-gray-400/10 rounded-lg shadow-lg">
            <h2 className="text-white text-3xl md:text-4xl font-bold mb-6">{title}</h2>
      <div className="flex flex-col lg:flex-row lg:space-x-6 justify-between items-start">


        {/* Columna de Título y Enlaces */}
        <div className="w-full lg:w-1/3 p-4 md:p-6 flex flex-col justify-evenly">
          <div>
            <div className="flex-col space-y-4 mb-4">
              <a href={repoUrl} className="flex  justify-center text-white hover:underline">
                <img className="w-6 h-6" src="/icon3.png" alt="ícono github" />
                <span>Repositorio</span>
              </a>
              {deployUrl && (
                <a href={deployUrl} className="flex  justify-center text-white hover:underline">
                  <img className="w-6 h-6" src="https://img.icons8.com/?size=100&id=wh2djijxoGnG&format=png&color=000000" alt="ícono deploy" />
                  <span>Deploy</span>
                </a>
              )}
            </div>
            <p className="text-lg md:text-xl mb-4">{description}</p>
          </div>


        </div>

        {/* Columna de Video */}
        <div className="bg-black/20 p-4 rounded-lg shadow-md">
            <img
              className="w-full h-64 object-contain rounded"
              src={img.url}
              alt={img.alt}
            />
        {videoUrl && (
          <div className="w-full lg:w-full p-4 md:p-6 flex flex-col justify-between bg-black/20 rounded-lg shadow-md">
            <VideoComponent className="w-full h-full object-cover rounded" url={videoUrl} />
          </div>
        )}
          </div>

        {/* Columna de Tags */}
        <div className="w-full lg:w-1/3 px-4 md:px-6 flex flex-col items-start lg:items-end cursor-pointer">
          <h3 className="text-xl md:text-2xl underline text-orange-500 mb-2">Tecnologías</h3>
          <div className="flex flex-wrap gap-1">
            {tags.map((tag) => (
              <p className="tag text-lg mr-2 mb-2 px-3 py-1 hover:bg-orange-500 hover:text-black  shadow-md shadow-black rounded-lg text-orange-500 bg-black transition duration-300" key={tag}>
                <a href={`/tags/${tag}`}>{tag}</a>
              </p>
            ))}
          </div>
        </div>

      </div>
    </article>
  );
}

export default ProjectDetail;
