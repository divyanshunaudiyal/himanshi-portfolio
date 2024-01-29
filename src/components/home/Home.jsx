import { useEffect, useState } from "react";
// import { ImFacebook, ImGithub, ImInstagram } from "react-icons/im";
import { FaFacebook, FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
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

  return (
    <section className="home">
      <div className="home_text">
        <h1>Himanshi Tiwari</h1>
        <h4>
          I am a <span className="text-change">{displayedTitle}</span>
        </h4>
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
