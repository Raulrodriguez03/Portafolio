import { Navbar } from "./components/Navbar";
import { Banner } from "./components/Banner";

import { MyProjects } from "./components/MyProjects";
import { Footer } from "./components/Footer";

export const Project = () => {
  return (
    <div className="bg-[url('./asset/img/footer-bg.png')] w-full">
      <div className="bg-[url('./asset/img/banner-bg.png')]">
        <Navbar />
        <Banner />
      </div>
      <MyProjects />
      <Footer />
    </div>
  );
};
