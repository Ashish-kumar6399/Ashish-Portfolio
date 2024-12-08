import "./About.css";
import profile from "../../img/profile.jpeg";

const About = () => {
  return (
    <div className="about" id="about">
      <div className="about-heading">
        <h1 className=" " style={{paddingTop:"6rem"}}>About me</h1>
      </div>
      <div className="about-container">
        <div className="about-img">
          <img src={profile} alt="" />
        </div>
        <div className="about-text-container">
          <div className="about-experience">
            <p style={{textAlign:"justify"}}>
              Frontend Developer with 6 months of hands-on experience in
              creating responsive and dynamic web applications. Proficient in
              HTML, CSS, JavaScript, and modern frameworks including React.js,
              Next.js, and Express.js. Skilled in using Bootstrap and Tailwind
              CSS to craft visually appealing, user-friendly interfaces. Eager
              to continue building impactful digital experiences and expanding
              expertise in the latest web technologies.
              <br />
             
            </p>
          </div>
          <div className="about-skills">
            <li className="about-skill">
              <p>HTML & CSS</p> <hr style={{ width: "80%" }} />
            </li>
            <li className="about-skill">
              <p>JAVASCRIPT</p> <hr style={{ width: "60%" }} />
            </li>
            <li className="about-skill">
              <p>REACT JS</p> <hr style={{ width: "80%" }} />
            </li>
            <li className="about-skill">
              <p>Next Js</p> <hr style={{ width: "80%" }} />
            </li>
            <li className="about-skill">
              <p>BOOTSTRAP</p> <hr style={{ width: "80%" }} />
            </li>
            <li className="about-skill">
              <p>Tailwind</p> <hr style={{ width: "60%" }} />
            </li>
            <li className="about-skill">
              <p>Express</p> <hr style={{ width: "60%" }} />
            </li>
          </div>
        </div>
      </div>
      <div className="about-works"></div>
    </div>
  );
};

export default About;
