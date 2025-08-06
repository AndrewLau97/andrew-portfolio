import webLinks from "../configs/webLinks";

const NavBar = () => {
  return (
    <>
      <nav className="w-full sm:w-auto">
        <div className="flex justify-end">
          <ul className="sm:flex flex-col sm:flex-row items-center sm:gap-8 text-lg pr-5">
            <li><a href="#homepage">Homepage</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#contact">Contact Me</a></li>
            <li>
              <a
                href={`${webLinks.linkedIn}`}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-mediumblue py-2 sm:py-0 flex"
              >
                LinkedIn
              <img src="linkedIn.png" className="h-5 m-auto pl-1"/>
              </a>
            </li>
            <li>
              <a
                href={`${webLinks.github}`}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-mediumblue py-2 sm:py-0 flex"
              >
                GitHub
              <img src="gitHub.png" className="h-5 m-auto pl-1"/>
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
