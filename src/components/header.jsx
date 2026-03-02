import { Link } from "react-router-dom";
import { useState } from "react";

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { name: "Home", path: "/" },
    { name: "Movies", path: "/movies" },
    { name: "Characters", path: "/characters" },
    { name: "Games", path: "/games" },
  ];

  return (
    <header className="bg-black w-full relative z-[100]">
      {/* --- BARRA DE NAVEGAÇÃO DESKTOP (Mantém igual) --- */}
      <nav className="hidden md:block border-b border-golden_old/10">
        <ul className="flex tracking-[0.4em] font-extrabold font-cocogothic text-golden_old p-5 justify-around text-sm uppercase bg-black/60 backdrop-blur-sm">
          {links.map((link) => (
            <li key={link.name} className="hover:text-brown_grey/80 transition duration-300">
              <Link to={link.path}>{link.name}</Link>
            </li>
          ))}
        </ul>
      </nav>

      {/* --- BARRA MOBILE (Ícone à Esquerda) --- */}
      <div className="md:hidden flex items-center justify-start p-5 border-b border-golden_old/10">
        <button 
          onClick={() => setIsOpen(!isOpen)}
          className="text-golden_old text-3xl focus:outline-none z-[110]"
          aria-label="Abrir Menu"
        >
          {/* O ícone agora está no início (flex-start) */}
          {isOpen ? "✕" : "☰"}
        </button>
        
        {/* Opcional: Você pode colocar um título ou Logo aqui se quiser que apareça ao lado do ícone */}
        {/* <span className="ml-4 text-golden_old font-cocogothic uppercase tracking-widest text-xs">Menu</span> */}
      </div>

      {/* --- MENU OVERLAY MOBILE (Aparece da Esquerda para a Direita) --- */}
      <div className={`
        fixed inset-0 bg-black/95 backdrop-blur-lg z-[100] flex flex-col items-center justify-center
        transition-transform duration-500 ease-in-out md:hidden
        ${isOpen ? "translate-x-0" : "-translate-x-full"} 
      `}>
        {/* Mudei de 'translate-x-full' para '-translate-x-full' para que o menu também venha da esquerda */}
        
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
