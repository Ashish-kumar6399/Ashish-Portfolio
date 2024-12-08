import profile from "../../img/profile.jpeg";
import resume from "../../img/Resume.pdf"; // Ensure this path points to your resume file
function Heronew() {
  return (
    <div>
    <div className="container w-100 d-flex flex-column flex-md-row align-items-center justify-content-center">
      <div className="text-center text-md-start mb-4 mb-md-0 me-md-4">
        <h1 className="text-lg-center mt-4 mt-lg-5 ">
        I am Ashish Kumar frontend
        developer based in India        </h1>
        <h6 className="mt-3 fs-5 mt-lg-5 ps-sm-3   col-lg-10 " style={{textAlign:"justify"}}>
          Frontend Developer with 6 months of experience in building responsive,
          user-friendly web applications using HTML, CSS, JavaScript, React,
          Next.js, Express.js, Bootstrap, and Tailwind CSS. Passionate about
          crafting clean and engaging digital experiences.
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
  
      {/* Image Section */}
      <div className="text-center">
        <img
          src={profile}
          alt="Profile"
          className="img-fluid "
          style={{ maxWidth: "300px", height: "auto" }}
        />
      </div>
    </div>
  </div>
  
  );
}

export default Heronew;
