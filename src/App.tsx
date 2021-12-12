import React, { useEffect, useRef, useState } from "react";
import { FiGithub, FiTwitter, FiLinkedin } from "react-icons/fi";
import { SiLeetcode } from "react-icons/si";
import { ReactComponent as BinarySearchIcon } from "assets/binarysearch.svg";
import Intro from "sections/intro/Intro";
import "aos/dist/aos.css";
import About from "sections/about/About";
import Skills from "sections/skills/Skills";
import Projects from "sections/projects/Projects";
import Connect from "sections/connect/Connect";
import { AiOutlineClose } from "react-icons/ai";
import { BiMenuAltRight } from "react-icons/bi";
const AOS = require("aos");

function Menu(props: {
  isDrawerOpen?: Boolean;
  setIsDrawerOpen?: React.Dispatch<React.SetStateAction<Boolean>>;
}) {
  return (
    <>
      <ul
        className="list-none
           flex flex-col md:flex-row justify-evenly md:justify-start items-center"
      >
        <a
          href="#about"
          onClick={() => {
            if (props.isDrawerOpen && props.setIsDrawerOpen) {
              props.setIsDrawerOpen(false);
            }
          }}
        >
          <li className="my-6 md:mx-3 text-lg md:text-sm hover:text-green">
            About
          </li>
        </a>
        <a
          href="#skills"
          onClick={() => {
            if (props.isDrawerOpen && props.setIsDrawerOpen) {
              props.setIsDrawerOpen(false);
            }
          }}
        >
          <li className="my-6 md:mx-3 text-lg md:text-sm hover:text-green">
            Skills
          </li>
        </a>
        <a
          href="#projects"
          onClick={() => {
            if (props.isDrawerOpen && props.setIsDrawerOpen) {
              props.setIsDrawerOpen(false);
            }
          }}
        >
          <li className="my-6 md:mx-3 text-lg md:text-sm hover:text-green">
            Projects
          </li>
        </a>
        <a
          href="#connect"
          className="md:hidden"
          onClick={() => {
            if (props.isDrawerOpen && props.setIsDrawerOpen) {
              props.setIsDrawerOpen(false);
            }
          }}
        >
          <li className="my-6 md:mx-3 text-lg md:text-sm hover:text-green">
            Connect
          </li>
        </a>
      </ul>
      <a
        href="https://drive.google.com/file/d/1zkb46fHAyLOn7okQ_qUJDogdya13brHd/view?usp=sharing"
        target="_blank"
        rel="noopener noreferrer"
      >
        <div
          className="my-6 md:mx-3 
          px-4 py-2
          border-2 border-green
          rounded-md
          text-lg md:text-sm text-green
          cursor-pointer"
        >
          Resume
        </div>
      </a>
    </>
  );
}

function App() {
  const navbarEl = useRef<null | HTMLElement>(null);
  const [prevScrollPos, setPrevScrollPos] = useState<number>(window.scrollY);
  const [isDrawerOpen, setIsDrawerOpen] = useState<Boolean>(false);

  window.addEventListener("scroll", () => {
    const currScrollPos: number = window.scrollY;

    if (navbarEl.current && !isDrawerOpen) {
      if (prevScrollPos > currScrollPos) {
        navbarEl.current.style.top = "0";
      } else {
        navbarEl.current.style.top = "-4rem";
      }
      setPrevScrollPos(currScrollPos);
    }
  });

  document.body.addEventListener("touchmove", (e) => {
    if (isDrawerOpen) {
      e.preventDefault();
    }
  });

  useEffect(() => {
    AOS.init({
      duration: 500,
    });
  }, []);

  useEffect(() => {
    const body: HTMLBodyElement = document.getElementsByTagName("body")[0];
    if (isDrawerOpen) {
      body.classList.add("stop-scrolling");
    } else {
      body.classList.remove("stop-scrolling");
    }
  }, [isDrawerOpen]);

  return (
    <div
      className="relative
      w-full 
      overflow-hidden
      bg-navy 
      text-slate font-sans font-medium"
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
        <div className="ml-4">
          <p className="font-cursive font-semibold text-3xl text-green">
            Chandragupt
          </p>
        </div>
        <div className="mr-2 font-mono hidden md:flex items-center">
          <Menu />
        </div>
        <div className="mr-2 flex md:hidden items-center">
          {!isDrawerOpen && (
            <BiMenuAltRight
              className="h-10 w-10 text-green cursor-pointer"
              onClick={() => {
                setIsDrawerOpen(true);
              }}
            />
          )}
        </div>
      </nav>
      <div
        className={`relative flex justify-center ${
          isDrawerOpen && "filter blur-sm"
        }`}
      >
        <div
          className="fixed bottom-0 left-2/100 lg:left-3/100 w-10
        hidden md:flex flex-col items-center
        fade-1000"
        >
          <ul className="list-none ">
            <a
              href="https://github.com/chandraguptgosavi"
              target="_blank"
              rel="noopener noreferrer"
            >
              <li className="transition duration-500 hover:text-green transform hover:-translate-y-1 hover:scale-105">
                <FiGithub className="h-5 w-5 my-8" />
              </li>
            </a>
            <a
              href="https://www.linkedin.com/in/chandragupt-gosavi-5340961b0/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <li className="transition duration-500 hover:text-green transform hover:-translate-y-1 hover:scale-105">
                <FiLinkedin className="h-5 w-5 my-8" />
              </li>
            </a>
            <a
              href="https://binarysearch.com/@/chandragupt"
              target="_blank"
              rel="noopener noreferrer"
            >
              <li className="transition duration-500 transform hover:-translate-y-1 hover:scale-105">
                <BinarySearchIcon className="h-5 w-5 my-8 fill-current hover:text-green" />
              </li>
            </a>
            <a
              href="https://leetcode.com/chandraguptgosavi/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <li className="transition duration-500 hover:text-green transform hover:-translate-y-1 hover:scale-105">
                <SiLeetcode className="h-5 w-5 my-8" />
              </li>
            </a>
            <a
              href="https://twitter.com/chandragupt_g"
              target="_blank"
              rel="noopener noreferrer"
            >
              <li className="transition duration-500 hover:text-green transform hover:-translate-y-1 hover:scale-105">
                <FiTwitter className="h-5 w-5 my-8" />
              </li>
            </a>
          </ul>
          <div className="w-px h-24 bg-slate"></div>
        </div>
        <div className="w-5/6 md:w-3/4 max-w-screen-lg">
          <Intro />
          <About />
          <Skills />
          <Projects />
          <Connect />
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
            <a
              href="mailto:chandraguptgosavi@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              chandraguptgosavi@gmail.com
            </a>
          </p>
          <div className="w-px h-24 mt-2 bg-slate"></div>
        </div>
      </div>
      <aside
        className={`z-50
        fixed top-0 right-0 bottom-0
        w-1/2 h-screen
        font-mono
        bg-lightNavy
        transition-transform duration-500
        transform md:translate-x-full
        ${isDrawerOpen ? "translate-x-0" : "translate-x-full"}`}
      >
        <div className="relative w-full h-full flex flex-col justify-center items-center">
          <AiOutlineClose
            className={`absolute right-2 top-2 
            h-10 w-10
            text-green
            transition-transform 
            transform
            ${isDrawerOpen ? "rotate-0" : "rotate-180"}
            cursor-pointer`}
            onClick={() => {
              setIsDrawerOpen(false);
            }}
          />
          <Menu isDrawerOpen={isDrawerOpen} setIsDrawerOpen={setIsDrawerOpen} />
        </div>
      </aside>
    </div>
  );
}

export default App;
