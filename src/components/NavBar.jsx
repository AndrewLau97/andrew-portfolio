import { useState } from "react";
import webLinks from "../configs/webLinks";
import { Bars3Icon } from "@heroicons/react/20/solid";

const NavBar = () => {
  const [showNavBar, setShowNavBar] = useState(false);
  return (
    <>
      <nav className="w-full sm:w-auto">
        <div className="md:hidden flex justify-end">
          <button
            onClick={() => setShowNavBar(!showNavBar)}
            className="text-actuallightblue p-2"
            aria-label="Open menu on mobile only"
          >
            <Bars3Icon className="w-6 h-6" />
          </button>
        </div>
        <div className="flex justify-end">
          <ul
            className={`${
              showNavBar ? "block" : "hidden"
            } md:flex flex-col md:flex-row items-center sm:gap-8 text-lg pr-5 `}
          >
            <li>
              <a href="#homepage" onClick={() => setShowNavBar(false)}>
                Homepage
              </a>
            </li>
            <li>
              <a href="#projects" onClick={() => setShowNavBar(false)}>
                Projects
              </a>
            </li>
            <li>
              <a href="#about" onClick={() => setShowNavBar(false)}>
                About
              </a>
            </li>
            <li>
              <a href="#contact" onClick={() => setShowNavBar(false)}>
                Contact Me
              </a>
            </li>
            <li>
              <a
                href={`${webLinks.linkedIn}`}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-mediumblue py-2 sm:py-0 flex"
                onClick={()=>setShowNavBar(false)}
              >
                LinkedIn
                <img src="linkedIn.png" className="h-5 m-auto pl-1" />
              </a>
            </li>
            <li>
              <a
                href={`${webLinks.github}`}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-mediumblue py-2 sm:py-0 flex"
                onClick={()=>setShowNavBar(false)}
              >
                GitHub
                <img src="gitHub.png" className="h-5 m-auto pl-1" />
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
