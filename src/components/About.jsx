import Me from "../assets/pictureofme.jpg";
import { AboutContent } from "../constantes/data";

const About = () => {
  return (
    <div className="border-b border-neutral-900 pb-4 lg:mb-35 ">
      <div className="flex flex-wrap">
        <div className="w-full lg:w-1/2">
          <div className="flex flex-col items-center lg:items-start">
            <h1 className="pb-16 text-6xl font-thin tracking-tight lg:mt-16 lg:text-8xl">
              Hedy Dauvergne
            </h1>
            <span className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-4xl tracking-tight text-transparent">
              AdminSys / Developpeur Full Stack
            </span>
            <p className="my-2 max-w-xl py-6 font-light tracking-tighter">
              {AboutContent}
            </p>
          </div>
        </div>
        <div className="w-full lg:w-1/2 lg:p-10">
          <div className="flex justify-center ">
            <img src={Me} alt="Dauvergne Hedy" className="rounded-t-2xl" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
