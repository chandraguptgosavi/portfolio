import React, { useState, useMemo } from "react";

interface Job {
  id: string;
  company: string;
  link: string;
  title: string;
  duration: string;
  responsibilities: string[];
}

export const workExperienceData: Job[] = [
  {
    id: "phownd",
    company: "Phownd",
    link: "https://www.linkedin.com/company/phownd/",
    title: "Founding Engineer", 
    duration: "July 2024 - January 2025",
    responsibilities: [
      "Engineered and launched a cross-platform dating app with swiping, location-based matching, real-time notifications, and in-app chat, ensuring seamless user experience.",
      "Designed and optimized the backend infrastructure and UI/UX, building a scalable architecture and implementing efficient matching algorithm for seamless user discovery.",
      "Led product development from concept to MVP, driving early adoption and validating market demand.",
      "Successfully onboarded around 1,000 users, growing an engaged community of like-minded individuals.",
    ],
  },
  {
    id: "hha",
    company: "HHAeXchange",
    link: "https://www.linkedin.com/company/hhaexchange/",
    title: "Software Engineer",
    duration: "January 2023 - April 2024",
    responsibilities: [
      "Redesigned the search results UI with infinite scrolling by enhancing API and SQL query, achieving 200% performance improvement and smoother navigation for end-users.",
      "Designed and developed RESTful APIs to streamline communication between backend and frontend systems, ensuring seamless integration within a high-demand enterprise ecosystem.",
      "Implemented exception handling mechanisms and test driven development, also refactored legacy stored procedures for better system compatibility and maintainability.",
      "Built dynamic UI components, including an expandable text component for readability and a grid layout with sorting and row toggling, enhancing interactivity and responsiveness across devices.",
    ],
  },
];

const Experience: React.FC = () => {
  const initialActiveTab =
    workExperienceData.find((job) => job.company === "Apple")?.id ||
    workExperienceData[0]?.id ||
    "";
  const [activeTabId, setActiveTabId] = useState<string>(initialActiveTab);

  const activeJob = useMemo(() => {
    return workExperienceData.find((job) => job.id === activeTabId);
  }, [activeTabId]);

  const tabBaseStyle =
    "px-4 py-3 w-full md:w-auto text-left text-sm font-medium whitespace-nowrap cursor-pointer border-b-2 md:border-b-0 md:border-l-2 transition-colors duration-200 ease-in-out focus:outline-none";
  const tabInactiveStyle =
    "border-lightestNavy hover:bg-gray-800/[0.6] hover:text-green";
  const tabActiveStyle = "border-green bg-gray-800/[0.6] text-green";

  return (
    <section id="experience" className="py-10 md:py-20">
      <div data-aos="fade-up" className="max-w-4xl mx-auto">
        <div className="mb-12 flex justify-between items-center">
          <p className="mr-2 font-semibold text-lightestSlate text-2xl">
            Where I've Worked
          </p>
          <div className="ml-2 h-px bg-lightestNavy flex-auto"></div>
        </div>

        <div className="flex flex-col md:flex-row gap-6 md:gap-10 min-h-[300px]">
          {" "}
          {/* Left Side: Tab List (Company Names) */}
          <div className="flex flex-row md:flex-col overflow-x-auto md:overflow-x-visible">
            {workExperienceData.map((job) => (
              <button
                key={job.id}
                onClick={() => setActiveTabId(job.id)}
                className={`${tabBaseStyle} ${
                  activeTabId === job.id ? tabActiveStyle : tabInactiveStyle
                }`}
                role="tab"
                aria-selected={activeTabId === job.id}
                aria-controls={`panel-${job.id}`}
                id={`tab-${job.id}`}
              >
                {job.company}
              </button>
            ))}
          </div>
          {/* Right Side: Job Details */}
          <div className="flex-grow md:pl-4">
            {activeJob ? (
              <div
                id={`panel-${activeJob.id}`}
                role="tabpanel"
                tabIndex={0}
                aria-labelledby={`tab-${activeJob.id}`}
              >
                <h3 className="text-xl font-medium mb-1 text-lightestSlate">
                  {activeJob.title}
                  <a href={activeJob.link} className="text-green">
                    {" "}
                    @ {activeJob.company}
                  </a>
                </h3>
                <p className="text-xs font-mono mb-5">{activeJob.duration}</p>
                <ul className="space-y-3 list-none">
                  {activeJob.responsibilities.map((resp, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <span className="text-green mt-1">▹</span>
                      <span className="text-sm md:text-base">{resp}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ) : (
              <p>Select a company to see the details.</p> 
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
