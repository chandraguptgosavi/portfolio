import React, { useRef, useState } from "react";
import { FiGithub, FiTwitter, FiLinkedin } from "react-icons/fi";
import { SiLeetcode } from "react-icons/si";
import { ReactComponent as BinarySearchIcon } from "assets/binarysearch.svg";
import Intro from "sections/intro/Intro";
import "aos/dist/aos.css";

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
      <div className="relative flex justify-center">
        <div
          className="fixed bottom-0 left-2/100 lg:left-3/100 w-10
        hidden md:flex flex-col items-center
        fade-1000"
        >
          <ul className="list-none ">
            <a href="https://github.com/chandraguptgosavi">
              <li className="transition duration-500 hover:text-green transform hover:-translate-y-1 hover:scale-105">
                <FiGithub className="h-5 w-5 my-8" />
              </li>
            </a>
            <a href="https://www.linkedin.com/in/chandragupt-gosavi-5340961b0/">
              <li className="transition duration-500 hover:text-green transform hover:-translate-y-1 hover:scale-105">
                <FiLinkedin className="h-5 w-5 my-8" />
              </li>
            </a>
            <a href="https://binarysearch.com/@/chandragupt">
              <li className="transition duration-500 transform hover:-translate-y-1 hover:scale-105">
                <BinarySearchIcon className="h-5 w-5 my-8 fill-current hover:text-green" />
              </li>
            </a>
            <a href="https://leetcode.com/chandraguptgosavi/">
              <li className="transition duration-500 hover:text-green transform hover:-translate-y-1 hover:scale-105">
                <SiLeetcode className="h-5 w-5 my-8" />
              </li>
            </a>
            <a href="https://twitter.com/chandragupt_g">
              <li className="transition duration-500 hover:text-green transform hover:-translate-y-1 hover:scale-105">
                <FiTwitter className="h-5 w-5 my-8" />
              </li>
            </a>
          </ul>
          <div className="w-px h-24 bg-slate"></div>
        </div>
        <div className="w-5/6 max-w-screen-lg">
          <Intro />
        </div>
        <div
          className="fixed bottom-0 right-2/100 lg:right-3/100 w-10
        hidden md:flex flex-col items-center
        fade-1000"
        >
          <p
            className="mb-28
          hover:text-green
          transform rotate-90"
          >
            <a href="mailto:chandraguptgosavi@gmail.com">
              chandraguptgosavi@gmail.com
            </a>
          </p>
          <div className="w-px h-24 mt-2 bg-slate"></div>
        </div>
      </div>
    </div>
  );
}

export default App;
