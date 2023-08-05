import { AiOutlineLinkedin } from "react-icons/ai";

import footerimg from "../asset/img/contact-img.svg";
import { FaReact } from "react-icons/fa";
import { BsGithub } from "react-icons/bs";

export const Footer = () => {
  return (
    <footer>
      <div className="text-white flex bg-difuminado py-16 px-12 gap-3">
        <img src={footerimg} className="w-3/6 flex-grow" />
        <form className="formulario flex-grow">
          <h1 className="texto-formulario">Get In Touch</h1>
          <input type="text" placeholder="First Name" className="input-form " />
          <input type="text" placeholder="Last Name" className="input-form " />
          <input
            type="email"
            placeholder="Email Address"
            className="input-form "
          />
          <input type="text" placeholder="Phone No." className="input-form " />
          <input type="text" placeholder="Message" className=" massage" />
          <button className="button"> Send</button>
        </form>
      </div>
      <div className="flex justify-between px-16 py-5">
        <div className="font-bold flex items-center">
          <FaReact className="text-purple-500" size={40} />
          <a
            href="#"
            className="mx-2 font-bold no-underline text-white text-lg"
          >
            Raul Rod
          </a>
        </div>
        <div className="flex gap-5">
          <button className="text-neutral-400 hover:text-white duration-200">
            <AiOutlineLinkedin size={30} />
          </button>
          <button className="text-neutral-400 hover:text-white duration-200 ">
            <BsGithub size={30} />
          </button>
        </div>
      </div>
    </footer>
  );
};
