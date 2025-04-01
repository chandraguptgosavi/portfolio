import { FiGithub, FiTwitter, FiLinkedin } from "react-icons/fi";
import { SiLeetcode } from "react-icons/si";

export default function Connect() {
  return (
    <footer id="connect" className="mb-20 flex md:hidden justify-center">
        <ul className="list-none flex">
          <a href="https://github.com/chandraguptgosavi">
            <li className="transition duration-500 hover:text-green transform hover:-translate-y-1 hover:scale-105">
              <FiGithub className="h-5 w-5 mx-3 sm:mx-6" />
            </li>
          </a>
          <a href="https://www.linkedin.com/in/chandragupt-gosavi-5340961b0/">
            <li className="transition duration-500 hover:text-green transform hover:-translate-y-1 hover:scale-105">
              <FiLinkedin className="h-5 w-5 mx-3 sm:mx-6" />
            </li>
          </a>
          <a href="https://leetcode.com/chandraguptgosavi/">
            <li className="transition duration-500 hover:text-green transform hover:-translate-y-1 hover:scale-105">
              <SiLeetcode className="h-5 w-5 mx-3 sm:mx-6" />
            </li>
          </a>
          <a href="https://twitter.com/chandragupt_g">
            <li className="transition duration-500 hover:text-green transform hover:-translate-y-1 hover:scale-105">
              <FiTwitter className="h-5 w-5 mx-3 sm:mx-6" />
            </li>
          </a>
        </ul>
    </footer>
  );
}
