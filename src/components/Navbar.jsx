import { useState } from 'preact/hooks';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header class="rounded-xl text-gray-800">
      <div class="container mx-auto flex justify-between items-center p-4">
        <div class="md:hidden">
          <button onClick={toggleMenu} class="focus:outline-none">
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7"></path>
            </svg>
          </button>
        </div>
        <nav class={`md:flex md:items-center ${isOpen ? 'block' : 'hidden'}`}>
          <a href="/" class="block mt-4 md:mt-0 md:ml-6 hover:bg-gray-200 p-2 rounded-xl">Inicio</a>
          <a href="/about" class="block mt-4 md:mt-0 md:ml-6 hover:bg-gray-200 p-2 rounded-xl">Sobre mí</a>
          <a href="/projects" class="block mt-4 md:mt-0 md:ml-6 hover:bg-gray-200 p-2 rounded-xl">Proyectos</a>
          <a href="/contact" class="block mt-4 md:mt-0 md:ml-6 hover:bg-gray-200 p-2 rounded-xl">Contacto</a>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;

