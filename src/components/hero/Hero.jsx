import "./Hero.css";
import profile from "../../img/profile.jpeg";
import resume from "../../img/Resume.pdf"; // Ensure this path points to your resume file

const Hero = () => {
  return (
    <div className="hero">
      <img src={profile} alt="Profile" />
      <h1>
        <span className="text-gradient">I am Ashish Kumar,</span> frontend
        developer based in India.
      </h1>
      <h6 className="container" style={{ textAlign: "center" }}>
        Frontend Developer with 6 months of experience in building responsive, user-friendly web applications using HTML, CSS, JavaScript, React, Next.js, Express.js, Bootstrap, and Tailwind CSS. Passionate about crafting clean and engaging digital experiences.
      </h6>
      <div className="hero-menu">
        <a href="#Contact">
          <div className="hero-connect text-white">Connect with me</div>
        </a>
        <a href={resume} target="blank">
          <div className="hero-resume">My resume</div>
        </a>
      </div>
    </div>
  );
};

export default Hero;
