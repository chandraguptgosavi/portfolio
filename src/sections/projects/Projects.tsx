import { FiExternalLink, FiGithub } from "react-icons/fi";

interface Project {
  title: string;
  description: string;
  image: string;
  github: string;
  url: string;
}
export default function Projects() {
  const myProjects: Project[] = [
    {
      title: "Codemore",
      description:
        "Online coding platform which helps in enhancing problem solving skills and expanding knowledge of data structures and algorithms.",
      image: "https://i.imgur.com/EKLtNlM.png",
      github: "https://github.com/chandraguptgosavi/codemore-frontend",
      url: "https://codemore.herokuapp.com",
    },
    {
      title: "DevMate",
      description:
        "Social media platform to easily discover, connect and chat with the software developers across the world and create awesome products.",
      image: "https://i.imgur.com/sjDgM7s.png",
      github: "https://github.com/chandraguptgosavi/devmate",
      url: "https://dev-mate.netlify.com",
    },
    {
      title: "Safe History",
      description:
        "Chrome browser extension to prevent storing browser history using keywords you specify.",
      image: "https://i.imgur.com/gBOlYSw.png",
      github: "https://github.com/chandraguptgosavi/safe-history",
      url: "https://chrome.google.com/webstore/detail/safe-history/hoakpodbfiokeacfknabolojboamdhdc",
    },
  ];

  return (
    <section id="projects" className="py-10 md:py-14">
      <div className="">
        <div className="mb-12 flex justify-between items-center">
          <p className="mr-2 font-semibold text-lightestSlate text-2xl">
            Some Things I’ve Built
          </p>
          <div className="ml-2 h-px bg-lightestNavy flex-auto"></div>
        </div>
        {myProjects.map((project: Project, index: number) => (
          <div data-aos="fade-up" className="relative mb-16 sm:mb-20 md:mb-28 flex items-center">
            <div
              className={`absolute top-1/2  ${
                index % 2 === 0 ? "md:left-0" : "md:right-0"
              } transform -translate-y-1/2  overflow-hidden max-h-full w-full md:w-1/2 rounded bg-green`}
            >
              <a href={project.url} target="_blank" rel="noreferrer">
                <img
                  src={project.image}
                  alt={`${project.title}-banner`}
                  className=" object-cover opacity-90 hover:opacity-100"
                />
              </a>
            </div>
            <div
              className={`z-50 p-4 w-full md:w-2/3 bg-lightNavy md:bg-transparent opacity-90 flex flex-col ${
                index % 2 === 0 && "ml-auto md:items-end"
              }`}
            >
              <p
                className="my-2
                text-sm text-green font-mono"
              >
                Featured Project
              </p>
              <a href={project.url} target="_blank" rel="noreferrer">
                <p
                  className="my-2 
              font-semibold text-2xl text-white md:text-lightestSlate hover:text-green"
                >
                  {project.title}
                </p>
              </a>
              <p className="my-4 md:p-4 rounded-md bg-lightNavy text-lightSlate">
                {project.description}
              </p>
              <span className="my-2 flex">
                <a href={project.github} target="_blank" rel="noreferrer">
                  <FiGithub className="mx-1 h-6 w-6 hover:text-green" />
                </a>
                <a href={project.url} target="_blank" rel="noreferrer">
                  <FiExternalLink className="mx-1 h-6 w-6 hover:text-green" />
                </a>
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
