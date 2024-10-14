import { FaGithub, FaLinkedin, FaMailBulk } from "react-icons/fa"; // Assurez-vous d'importer les icônes
import { SiTinder } from "react-icons/si"; // Assurez-vous d'importer les icônes

const Narbar = () => {
  return (
    <nav className="mb-20 flex items-center justify-between py-6">
      <div className="flex flex-shrink-0 items-center">
        <p className="m-6 text-2xl">Hedy.D</p>
      </div>
      <div className="m-8 flex items-center justify-center gap-4 text-2xl ">
        <a
          href="https://www.linkedin.com/in/hdauvergne/"
          target="_blank"
          rel="noopener noreferrer"
          className="transition-transform transform hover:scale-110 hover:-translate-y-1 hover:text-blue-500 hover:shadow-lg"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://github.com/Naiiky"
          target="_blank"
          rel="noopener noreferrer"
          className="transition-transform transform hover:scale-110 hover:-translate-y-1 hover:text-gray-300 hover:shadow-lg"
        >
          <FaGithub />
        </a>
        <a
          href="mailto:h.dauvergne98@gmail.com"
          className="transition-transform transform hover:scale-110 hover:-translate-y-1 hover:text-red-500 hover:shadow-lg"
        >
          <FaMailBulk />
        </a>
        <a
          href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
          target="_blank"
          rel="noopener noreferrer"
          className="transition-transform transform hover:scale-110 hover:-translate-y-1 hover:text-red-400 hover:shadow-lg"
        >
          <SiTinder />
        </a>
      </div>
    </nav>
  );
};

export default Narbar;
