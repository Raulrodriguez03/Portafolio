import {FaReact} from "react-icons/fa";
import {AiOutlineLinkedin} from "react-icons/ai";
import {BsGithub} from "react-icons/bs";
import {useState} from "react";

const opciones = ["Home", "Skills", "Projects", "Otros"];

export const Navbar = () => {
  const [navbar, setNavbar] = useState(false);

  const navbarBg = () => {
    if (window.scrollY > 250) setNavbar(true);
    else setNavbar(false);
  };
  window.addEventListener("scroll", navbarBg);

  // <nav className={`doble ${navbar ? '' : null}`}></nav>

  return (
      <nav className={`fixed w-full flex justify-between items-center px-12 py-7 ${navbar ? 'bg-black z-50' : null}`}>
        <div className="font-bold flex items-center">
          <FaReact className="text-purple-500" size={40}/>
          <a href="#" className="mx-2 font-bold no-underline text-white text-lg">
            Raul Rod
          </a>
        </div>
        <ul className="flex-grow justify-center flex gap-16 text-neutral-400">
          {opciones.map((opc) => (
              <li key={opc}>
                <a
                    aria-current="page"
                    href="#"
                    className="text-decoration-none text-secondary hover:underline duration-300"
                >
                  {opc}
                </a>
              </li>
          ))}
        </ul>
        <div className="flex gap-5">
          <button className="text-neutral-400 hover:text-white duration-200">
            <AiOutlineLinkedin size={30}/>
          </button>
          <button className="text-neutral-400 hover:text-white duration-200 ">
            <BsGithub size={30}/>
          </button>
          <button
              className="text-white border px-5 py-4  border-purple-500 font-semibold hover:bg-purple-500 duration-300 ">
            Let's Connect
          </button>
        </div>
      </nav>
  );
};
