import companyArray from "../experienceData";
function Experience() {
  return (
    <section className="experience" id="experience">
      <div className="experience_text">
        <div className="question">
          <hr />
          <h6>where she has worked</h6>
        </div>
        <p className="description">
          She has worked with multiple small scale organisations.
        </p>
        <h1>
          Work <span>Experience.</span>
        </h1>
      </div>
      <div className="experience_companies">
        {companyArray.map((elem, index) => (
          <div className={`company${index + 1}`} key={index}>
            <h1>{elem.name}</h1>
            <span className="number">{`0${index + 1} `}</span>
            <p>
              <h4 className="date">{elem.date}</h4>
              <h4 className="time">{elem.time}</h4>
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Experience;
