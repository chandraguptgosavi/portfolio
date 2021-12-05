import React, { useRef, useState } from "react";

function App() {
  const navbarEl = useRef<null | HTMLElement>(null);
  const [prevScrollPos, setPrevScrollPos] = useState<number>(window.scrollY);

  window.addEventListener("scroll", () => {
    const currScrollPos: number = window.scrollY;

    if (navbarEl.current) {
      if (prevScrollPos > currScrollPos) {
        navbarEl.current.style.top = "0";
      } else {
        navbarEl.current.style.top = "-4rem";
      }
      setPrevScrollPos(currScrollPos);
    }
  });

  return (
    <div
      className="w-full 
      bg-navy 
      text-slate font-serif"
    >
      <nav
        ref={navbarEl}
        className="z-50
          fixed top-0 
          h-16 w-full
          bg-navy text-lightestSlate
          navbar-shadow
          transition-top duration-300
          flex justify-between items-center
          "
      >
        <div className="ml-2"></div>
        <div className="mr-2 font-mono flex items-center">
          <ul
            className="list-none
           flex justify-evenly"
          >
            <a href="#about">
              <li className="mx-3 text-sm hover:text-green">About</li>
            </a>
            <a href="#skills">
              <li className="mx-3 text-sm hover:text-green">Skills</li>
            </a>
            <a href="#projects">
              <li className="mx-3 text-sm hover:text-green">Projects</li>
            </a>
            <a href="#connect" className="md:hidden">
              <li className="mx-3 text-sm hover:text-green">Connect</li>
            </a>
          </ul>
          <div
            className="mx-3
          px-4 py-2
          border-2 border-green
          rounded-md
          text-sm text-green
          cursor-pointer"
          >
            Resume
          </div>
        </div>
      </nav>
    </div>
  );
}

export default App;
