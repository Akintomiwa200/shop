import { FaCode, FaGithub, FaExternalLinkAlt } from "react-icons/fa"; // Importing icons from react-icons
import { projects } from "./data";

export default function Projects() {
  return (
    <section id="projects" className="text-black bg-white body-font">
      <div className="container px-5 py-10 mx-auto text-center lg:px-40">
        <div className="flex flex-col w-full mb-20">
          <FaCode className="mx-auto inline-block w-10 mb-4" /> {/* Using FaCode icon for title */}
          <h1 className="sm:text-4xl text-3xl font-medium title-font mb-4 text-black">
            Apps i have Built
          </h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
            A project is a complex undertaking by two or more persons within the boundaries of time, budget, and staff resources that produce new or enhanced computer code that adds significant business value to a new or existing business process. The previous projects I had my hands on include;
          </p>
        </div>
        <div className="flex flex-wrap -m-4">
          {projects.map((project) => (
            <a
              href={project.link}
              key={project.image}
              className="sm:w-1/2 w-100 p-4"
            >
              <div className="flex relative">
                <img
                  alt="gallery"
                  className="absolute inset-0 w-full h-full object-cover object-center"
                  src={project.image}
                />
                <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-800 bg-gray-900 opacity-0 hover:opacity-100">
                  <h2 className="tracking-widest text-sm title-font font-medium text-green-400 mb-1">
                    {project.subtitle}
                  </h2>
                  <h1 className="title-font text-lg font-medium text-white mb-3">
                    {project.title}
                  </h1>
                  <p className="leading-relaxed text-white">{project.description}</p>
                  <div className="mt-4 flex justify-center">
                    <a
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-400 mr-4 hover:text-white"
                    >
                      <FaGithub size={24} />
                    </a>
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-white"
                    >
                      <FaExternalLinkAlt size={24} />
                    </a>
                  </div>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
