import { useRef } from "react";
const projectsArray = [
  { name: "project1", url: "https://www.nbastore.in/" },
  { name: "project2", url: "hhttps://www.thewhitepole.com/" },
];

function Projects() {
  const projectsRef = useRef();
  // const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (event) => {
    const container = projectsRef.current;
    const rect = container.getBoundingClientRect();
    const x = (event.clientX - rect.left - rect.width / 2) / (rect.width / 2);
    const y = (event.clientY - rect.top - rect.height / 2) / (rect.height / 2);

    // setMousePosition({ x, y });

    event.target.style.transform = `rotateX(${y * 10}deg) rotateY(${
      -x * 10
    }deg) scale(1.05)`;
  };

  const handleMouseLeave = (e) => {
    e.target.style.transform = "rotateX(0) rotateY(0) scale(1)"; //back to normal on mouse leave
  };

  return (
    <section className="projects" id="projects">
      <div className="flex">
        <div className="project_text left-col">
          <div className="question">
            <hr />
            <h6>Let{"'"}s walk the talk?</h6>
          </div>
          <p className="description">
            Some awesome products for awesome people
          </p>
          <h1>
            Something she <span>has</span> built.
          </h1>
        </div>
        <img src="./work.png" alt="work" />
      </div>
      <div className="project_container" ref={projectsRef}>
        <div
          className="project project1"
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
        >
          {/* <img src="./home.jpeg" alt="" /> */}
        </div>
        <div
          className="project project2"
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
        ></div>
      </div>
    </section>
  );
}

export default Projects;
