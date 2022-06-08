interface Skill {
  icon: string;
  url: string,
  name: string;
}

export default function Skills() {
  const mySkills: Skill[] = [
    {
      icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg",
      url: "https://developer.mozilla.org/en-US/docs/Web/HTML",
      name: "HTML",
    },
    {
      icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg",
      url: "https://developer.mozilla.org/en-US/docs/Web/CSS",
      name: "CSS",
    },
    {
      icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg",
      url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
      name: "JavaScript",
    },
    {
      icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg",
      url: "https://www.typescriptlang.org/",
      name: "TypeScript",
    },
    {
      icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg",
      url: "https://reactjs.org/",
      name: "React",
    },
    {
      icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/redux/redux-original.svg",
      url: "https://redux.js.org/",
      name: "Redux",
    },
    {
      icon: "https://camo.githubusercontent.com/5734d0669fe22ce04a1cb989a156cd32c379875f6bca56d5210c9432824856d9/68747470733a2f2f7777772e766563746f726c6f676f2e7a6f6e652f6c6f676f732f7461696c77696e646373732f7461696c77696e646373732d69636f6e2e737667",
      url: "https://tailwindcss.com/",
      name: "TailwindCSS",
    },
    {
      icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original-wordmark.svg",
      url: "https://nodejs.org/",
      name: "Node.js",
    },
    {
      icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/express/express-original-wordmark.svg",
      url: "https://expressjs.com/",
      name: "Express",
    },
    {
      icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original-wordmark.svg",
      url: "https://www.mongodb.com/",
      name: "MongoDB",
    },
    {
      icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/cplusplus/cplusplus-original.svg",
      url: "https://isocpp.org/",
      name: "C++",
    },
  ];

  return (
    <section id="skills" className="py-10 md:py-14">
      <div data-aos="fade-up">
        <div className="mb-12 flex justify-between items-center">
          <p className="mr-2 font-semibold text-lightestSlate text-2xl">
            Languages and Tools
          </p>
          <div className="ml-2 h-px bg-lightestNavy flex-auto"></div>
        </div>
        <div className="flex gap-4 xs:gap-14 flex-wrap justify-center">
          {mySkills.map((skill: Skill, index: number) => (
            <div
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
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
