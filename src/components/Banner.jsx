import astronauta from "../asset/img/header-img.svg";
import { BsArrowRightCircle } from "react-icons/bs";
import meter1 from "../asset/img/meter1.svg";
import meter2 from "../asset/img/meter2.svg";
import meter3 from "../asset/img/meter3.svg";

export const Banner = () => {
  return (
    <div className="pb-10">
      <div className="flex justify-between items-center">
        <div className=" flex justify-center flex-col pt-24 pl-10 gap-2 h-screen ">
          <h3 className="q text-neutral-200 backdrop-blur-sm bg-white/10 text-lg w-max px-3 py-2 border border-white opacity-60">
            Welcome to my Portfolio
          </h3>
          <h1 className="text-white text-6xl font-semibold">Hi! I'm Raul</h1>
          <p className="text-neutral-200">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus
            adipisci alias aliquam aut fuga modi natus sit voluptatum! Cum
            cupiditate delectus hic id impedit nemo perspiciatis repellat
            repudiandae totam ut.
          </p>
          <button className="text-white flex items-center gap-3 font-semibold">
            Let's Connect
            <BsArrowRightCircle className="text-white" size={22} />
          </button>
        </div>
        <img className="w-2/5 mr-40 imagenDinamica" src={astronauta} />
      </div>
      <div className="flex flex-col items-center bg-black mx-20 rounded-3xl gap-3 py-16 px-48">
        <h2 className="text-white font-semibold text-4xl ">Skills</h2>
        <p className="text-neutral-400 text-center">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt
          esse libero saepe. Adipisci culpa eos expedita officiascusfkjcewsfhbu
        </p>
        <div className="flex text-white w-full justify-between pt-12">
          <h4 className="text-center text-neutral-100 w-1/5">
            <img className="pb-2" src={meter1} alt="95% React" />
            React
          </h4>
          <h4 className="text-center text-neutral-100 w-1/5">
            <img className="pb-2" src={meter2} alt="80% css" />
            css
          </h4>
          <h4 className="text-center text-neutral-100 w-1/5">
            <img className="pb-2" src={meter3} alt="90% JavaScript" />
            JavaScript
          </h4>
        </div>
      </div>
    </div>
  );
};
