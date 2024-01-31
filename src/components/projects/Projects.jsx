import { useRef } from "react";

function Projects() {
  const projectsRef = useRef();

  return (
    <section className="projects" ref={projectsRef} id="projects">
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
        {/* <iframe src="https://lottie.host/embed/fbb03df9-cd80-46d3-9ce5-d2faa0b33e0b/UcuUlJCW4C.json"></iframe> */}
      </div>
      <div className="project_container">
        <div className="project project1"></div>
        <div className="project project1"></div>
        <div className="project project1"></div>
        <div className="project project1"></div>
        <div className="project project1"></div>
        <div className="project project1"></div>
      </div>
    </section>
  );
}

export default Projects;
