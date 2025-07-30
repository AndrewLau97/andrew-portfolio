import { Link } from "react-router-dom";
import webLinks from "../configs/webLinks";

const Header = () => {

  return (
    <>
      <nav>
        <div>
          <ul className="sm:flex flex-col sm:flex-row items-center sm:gap-8 text-lg">
            <li>
              <Link to="/" className="hover:text-mediumblue py-2 sm:py-0">
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" className="hover:text-mediumblue py-2 sm:py-0">
                About
              </Link>
            </li>
            <li>
              <a
                href={`${webLinks.linkedIn}`}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-mediumblue py-2 sm:py-0"
              >
              LinkedIn
              </a>
            </li>
            <li>
              <a
                href={`${webLinks.github}`}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-mediumblue py-2 sm:py-0"
                >
                GitHub
                </a>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Header;
