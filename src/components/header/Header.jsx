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
          <ScrollLink to="" className="homepage">
            <ImHome3 />
            <span>home</span>
          </ScrollLink>

          <ScrollLink to="" className="about">
            <BsPersonStandingDress />
            <span>about</span>
          </ScrollLink>

          <ScrollLink to="" className="experience">
            <PiBagFill />
            <span>experience</span>
          </ScrollLink>

          <ScrollLink to="" className="projects">
            <IoLaptop />
            <span>projects</span>
          </ScrollLink>

          <ScrollLink to="" className="education">
            <IoBookSharp />
            <span>education</span>
          </ScrollLink>
        </nav>
      </div>
    </header>
  );
}

export default Header;
