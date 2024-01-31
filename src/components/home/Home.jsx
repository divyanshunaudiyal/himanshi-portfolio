import { useEffect, useRef, useState } from "react";
// import { ImFacebook, ImGithub, ImInstagram } from "react-icons/im";
import { FaFacebook, FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
function Home() {
  const jobTitle = "Full Stack Developer";
  const [displayedTitle, setDisplayedTitle] = useState("");

  useEffect(() => {
    const interval = setInterval(() => {
      if (displayedTitle.length < jobTitle.length) {
        setDisplayedTitle(jobTitle.substring(0, displayedTitle.length + 1));
      } else if (displayedTitle.length == jobTitle.length) {
        setDisplayedTitle("");
      }
    }, 250); // Change every 200 milliseconds, adjust the interval as needed

    return () => {
      clearInterval(interval);
    }; // Cleanup on component unmount
  }, [displayedTitle, jobTitle]);
  const homeRef = useRef();
  return (
    <section className="home" ref={homeRef}>
      <div className="home_text left-column_text">
        <div className="question ">
          <hr />
          <h6>who is she ?</h6>
        </div>
        <h1>Himanshi Tiwari</h1>
        <p className="description">
          I am a <span className="text-change">{displayedTitle}</span>
        </p>
        <p className="social-links">
          <a href="" className="insta" target="blank">
            <FaInstagram />
          </a>
          <a href="" className="fb" target="blank">
            <FaFacebook />
          </a>
          <a href="" className="github" target="blank">
            <FaGithub />
          </a>
          <a href="" className="linkedin" target="blank">
            <FaLinkedin />
          </a>
          <a href="" className="mail" target="blank">
            <SiGmail />
          </a>
        </p>
        <button className="download-btn">Download resume</button>
      </div>
      <div className="home_img">
        <div className="image-circle"></div>
        <img src="./bob.png" alt="" />
      </div>
    </section>
  );
}

export default Home;
