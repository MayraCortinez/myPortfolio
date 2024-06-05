import { navigate } from "astro:transitions/client";

export default function Navbar() {
  return (
    <select
      onChange={(e) => navigate(e.target.value)}
      className="bg-black text-white block appearance-none border border-orange-300 hover:border-orange-400 px-4 py-2 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
    >
      <option value="/about"></option>
      <option value="/#about">Sobre mí</option>
      <option value="/projects">Proyectos</option>
      <option value="/tags">Habilidades</option>
    </select>
  );
}
