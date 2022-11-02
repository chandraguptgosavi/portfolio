import { ReactElement } from "react";

interface Paragraph {
  element: ReactElement;
}

export default function About() {
  const paragraphs: Paragraph[] = [
    {
      element: (
        <p className="mb-4">
          Hello! Myself Chandragupt. I’m an aspiring software engineer
          specializing in building exceptional digital experiences. Currently,
          I’m focusing on improving myself in all aspects and learning awesome
          things.
        </p>
      ),
    },
    {
      element: (
        <p className="mb-4">
          I enjoy creating web applications as well as solving real world
          problems. Also, I have good command over data structures and
          algorithms and computer fundamentals.
        </p>
      ),
    },
    {
      element: (
        <p className="mb-4">
          {`Currently, I am pursuing B.Tech. degree in Computer Engineering. I
          also recently launched a chrome extension, `}
          <a
            href="https://chrome.google.com/webstore/detail/safe-history/hoakpodbfiokeacfknabolojboamdhdc"
            target="_blank"
            rel="noopener noreferrer"
            className="text-green"
          >
            check out here
          </a>
          .
        </p>
      ),
    },
  ];

  return (
    <section id="about" className="py-10 md:py-14">
      <div data-aos="fade-up" className="leading-relaxed">
        <div className="mb-10 flex justify-between items-center">
          <p className="mr-2 font-semibold text-lightestSlate text-2xl">
            About Me
          </p>
          <div className="ml-2 h-px bg-lightestNavy flex-auto"></div>
        </div>
        {paragraphs.map((paragraph: Paragraph) => paragraph.element)}
      </div>
    </section>
  );
}
