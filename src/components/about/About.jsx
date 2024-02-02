import { useRef } from "react";

function About() {
  const aboutRef = useRef();

  // const [isScrolled, setIsScrolled] = useState(false);
  // useEffect(() => {
  //   const handleScroll = () => {
  //     const boundingBox = document
  //       .querySelector(".about")
  //       .getBoundingClientRect();

  //     if (boundingBox.top < window.innerHeight && boundingBox.bottom >= 0) {
  //       setIsScrolled(true);
  //     } else {
  //       setIsScrolled(false);
  //     }
  //   };
  //   // Add event listener for the scroll event
  //   window.addEventListener("scroll", handleScroll);

  //   // Remove the event listener when the component is unmounted
  //   return () => {
  //     window.removeEventListener("scroll", handleScroll);
  //   };
  // }, []);

  return (
    <section className="about" ref={aboutRef} id="about">
      <div className="about_text">
        <div className={`question`}>
          <hr />
          <h6>what does she do?</h6>
        </div>
        <p className="description">
          She creates elegant, logical web and mobile app solutions. In her
          hobby time, she designs.
        </p>
        <h1>
          think. <span>code.</span> debug
        </h1>
      </div>
      <div className="about_skills">
        <div className="skills-container">
          <img src="./node.svg" alt="" className="node" />
          <img src="./mongodb.svg" alt="mongo" className="mongo" />
          <img src="./express.svg" alt="" className="express" />
          <img src="./react.svg" alt="" className="react" />
          <img src="./figma.svg" alt="" className="figma" />
          <img src="./js.svg" alt="" className="js" />
        </div>
      </div>
    </section>
  );
}

export default About;
