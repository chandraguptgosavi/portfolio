interface Skill {
  icon: string;
  url: string;
  name: string;
}

export default function Skills() {
  const mySkills: Skill[] = [
    {
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-plain.svg",
      url: "https://developer.mozilla.org/en-US/docs/Web/HTML",
      name: "HTML",
    },
    {
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-plain.svg",
      url: "https://developer.mozilla.org/en-US/docs/Web/CSS",
      name: "CSS",
    },
    {
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-plain.svg",
      url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
      name: "JavaScript",
    },
    {
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-plain.svg",
      url: "https://www.typescriptlang.org/",
      name: "TypeScript",
    },
    {
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
      url: "https://reactjs.org/",
      name: "React",
    },
    {
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg",
      url: "https://nextjs.org/",
      name: "Next.js",
    },

    {
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original-wordmark.svg",
      url: "https://nodejs.org/",
      name: "Node.js",
    },
    {
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original.svg",
      url: "https://expressjs.com/",
      name: "Express.js",
    },
    {
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/dotnetcore/dotnetcore-original.svg",
      url: "https://dotnet.microsoft.com/en-us/apps/aspnet",
      name: "ASP.NET Core",
    },
    {
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg",
      url: "https://www.postgresql.org/",
      name: "PostgreSQL",
    },
    {
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/microsoftsqlserver/microsoftsqlserver-plain-wordmark.svg",
      url: "https://www.microsoft.com/en-in/sql-server",
      name: "SQL Server",
    },
    {
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/csharp/csharp-plain.svg",
      url: "https://learn.microsoft.com/en-us/dotnet/csharp/tour-of-csharp/",
      name: "C#",
    },
    {
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg",
      url: "https://www.python.org/",
      name: "Python",
    },
    {
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg",
      url: "https://www.docker.com/",
      name: "Docker",
    },
  ];

  return (
    <section id="skills" className="py-10 md:py-20">
      <div data-aos="fade-up">
        <div className="mb-12 flex justify-between items-center">
          <p className="mr-2 font-semibold text-lightestSlate text-2xl">
            Languages and Tools
          </p>
          <div className="ml-2 h-px bg-lightestNavy flex-auto"></div>
        </div>
        <div className="flex gap-10 xs:gap-14 flex-wrap justify-center">
          {mySkills.map((skill: Skill, index: number) => (
            <div
              key={index}
              className="w-2/5 xs:w-1/4 md:w-1/6 
                      flex flex-col justify-around items-center"
            >
              <a href={skill.url} target="_blank" rel="noopener noreferrer">
                <img
                  src={skill.icon}
                  alt={skill.name}
                  className="w-12 xs:w-16"
                />
              </a>
              <p>{skill.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
