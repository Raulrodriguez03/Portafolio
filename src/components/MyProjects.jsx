import project1 from "../asset/img/project-img1.png";
import project2 from "../asset/img/project-img2.png";
import project3 from "../asset/img/project-img3.png";
import { useState } from "react";

const projects = [project1, project2, project3];

export const MyProjects = () => {
  const [tab, setTab] = useState(0);

  const view = () => {
    if (tab === 1) {
      return (
        <div className="flex justify-center mt-7 gap-7 w-2/5">
          {projects.map((templates, index) => (
            <img key={index} src={templates} alt="Proyectos" />
          ))}
        </div>
      );
    } else if (tab === 2) {
      return <h1 className="text-white">hola</h1>;
    }
  };

  return (
    <div className="flex flex-col bg-black items-center py-20 gap-4 px-60">
      <h2 className="text-white font-semibold text-4xl">Projects</h2>
      <p className="text-neutral-400 px-16 text-center">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. At cumque
        debitis, illum labore obcaecati sit voluptatem! A animi consequatur
        consequuntur corporis distinctio fugit incidunt iste natus omnis,
        repellendus voluptatem, voluptatibus?
      </p>
      <div className="text-neutral-200 flex w-full pt-2">
        <button
          className={
            tab === 1
              ? "border flex-grow py-2 rounded-l-full bg-difuminado"
              : "border flex-grow py-2 rounded-l-full"
          }
          onClick={() => setTab(1)}
        >
          Tab 1
        </button>
        <button
          className={
            tab === 2
              ? "border flex-grow py-2 bg-difuminado"
              : "border flex-grow py-2"
          }
          onClick={() => setTab(2)}
        >
          Tab 2
        </button>
        <button
          className={
            tab === 3
              ? "border flex-grow rounded-r-full bg-difuminado"
              : "border flex-grow rounded-r-full"
          }
          onClick={() => setTab(3)}
        >
          Tab 3
        </button>
      </div>
      {view()}
    </div>
  );
};
