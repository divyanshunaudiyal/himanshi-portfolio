import { Link as ScrollLink } from "react-scroll";
import { ImHome3 } from "react-icons/im";
import { BsPersonStandingDress } from "react-icons/bs";
import { PiBagFill } from "react-icons/pi";
import { IoLaptop } from "react-icons/io5";
import { IoBookSharp } from "react-icons/io5";
function Header() {
  return (
    <header className="header">
      <div className="header-container">
        <nav>
          <ScrollLink
            to="home"
            className="homepage"
            smooth={true}
            duration={750}
          >
            <ImHome3 />
            <span>home</span>
          </ScrollLink>

          <ScrollLink to="about" className="about" smooth={true} duration={750}>
            <BsPersonStandingDress />
            <span>about</span>
          </ScrollLink>

          <ScrollLink to="" className="experience" smooth={true} duration={750}>
            <PiBagFill />
            <span>experience</span>
          </ScrollLink>

          <ScrollLink
            to="projects"
            className="projects"
            smooth={true}
            duration={750}
          >
            <IoLaptop />
            <span>projects</span>
          </ScrollLink>

          <ScrollLink to="" className="education" smooth={true} duration={750}>
            <IoBookSharp />
            <span>education</span>
          </ScrollLink>
        </nav>
      </div>
    </header>
  );
}

export default Header;
