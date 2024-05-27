import { useState } from 'preact/hooks';
import ProjectList from './ProjectList.astro';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-gray-800 text-gray-500 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="md:hidden">
          <button onClick={toggleMenu} className="focus:outline-none">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
            </svg>
          </button>
        </div>
        <ul className="hidden md:flex md:items-center">
          <li><a href="/" className="block mt-4 md:mt-0 md:ml-6">Inicio</a></li>
          <li><a href="/about" className="block mt-4 md:mt-0 md:ml-6">Sobre mí</a></li>
          <li className="relative">
            <button onFocusIn={toggleMenu} className="block mt-4 md:mt-0 md:ml-6 focus:outline-none">
              Proyectos
            </button>
            {isOpen && (
              <div className="absolute bg-gray-700 text-gray-500 mt-2 rounded shadow-lg z-10">
                <ProjectList />
              </div>
            )}
          </li>
          <li><a href="/contact" className="block mt-4 md:mt-0 md:ml-6">Contacto</a></li>
        </ul>
      </div>
      <style>
        {`
          @media (max-width: 768px) {
            .md\\:hidden {
              display: block;
            }
            .md\\:flex {
              display: none;
            }
          }
        `}
      </style>
    </nav>
  );
};

export default Navbar;
