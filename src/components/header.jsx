import { Link, Outlet } from "react-router-dom";
import { useState } from "react";


function Header() {
  const [isOpen, setIsOpen] = useState(false);

  // Lista única de links para facilitar a manutenção
  const links = [
    { name: "Home", path: "/" },
    { name: "Movies", path: "/movies" },
    { name: "Characters", path: "/characters" },
    { name: "Games", path: "/games" },
  ];

  return (
    <header className="bg-black w-full relative z-[100]">
      {/* --- BARRA DE NAVEGAÇÃO DESKTOP (Horizontal) --- */}
      {/* A classe 'hidden md:block' garante que este menu suma no mobile */}
      <nav className="hidden md:block border-b border-golden_old/10">
        <ul className="flex tracking-[0.4em] font-extrabold font-cocogothic text-golden_old p-5 justify-around text-sm uppercase bg-black/60 backdrop-blur-sm">
          {links.map((link) => (
            <li key={link.name} className="hover:text-brown_grey/80 transition duration-300">
              <Link to={link.path}>{link.name}</Link>
            </li>
          ))}
        </ul>
      </nav>

      {/* --- BARRA MOBILE (Visível apenas em telas pequenas) --- */}
      <div className="md:hidden flex justify-end p-5 border-b border-golden_old/10">
        <button 
          onClick={() => setIsOpen(!isOpen)}
          className="text-golden_old text-3xl focus:outline-none z-[110]"
          aria-label="Abrir Menu"
        >
          {isOpen ? "✕" : "☰"}
        </button>
      </div>

      {/* --- MENU OVERLAY MOBILE (Vertical e Sobreposto) --- */}
      {/* fixed inset-0: Faz o menu cobrir a tela inteira.
          translate-x: Faz o menu deslizar da direita para a esquerda.
      */}
      <div className={`
        fixed inset-0 bg-black/95 backdrop-blur-lg z-[100] flex flex-col items-center justify-center
        transition-transform duration-500 ease-in-out md:hidden
        ${isOpen ? "translate-x-0" : "translate-x-full"}
      `}>
        <nav>
          <ul className="flex flex-col gap-12 tracking-[0.5em] font-extrabold font-cocogothic text-golden_old text-center text-xl uppercase">
            {links.map((link) => (
              <li key={link.name} className="hover:text-brown_grey/80 transition duration-300">
                <Link to={link.path} onClick={() => setIsOpen(false)}>
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
