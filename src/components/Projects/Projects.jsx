import "./Projects.css";
// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
import project from "../../img/cabonhire.jpg";
import project1 from "../../img/mr engg.jpg";
import project2 from "../../img/hhes.jpg";
import project3 from "../../img/chandrashila.jpg";
import project4 from "../../img/Kanak.jpg";
import project5 from "../../img/Carrent.jpg";
// import  from '../../img/project1.webp'

// const Projects = () => {

//     const settings = {
//         dots: true,
//         infinite: true,
//         speed: false,
//         slidesToShow: 3,
//         slidesToScroll: 1,
//         autoplay: true,
//         autoplaySpeed: 1500,
//         responsive: [
//           {
//             breakpoint: 1024,
//             settings: {
//               slidesToShow: 3,
//             }
//           },
//           {
//             breakpoint: 768,
//             settings: {
//               slidesToShow: 2,
//             }
//           },
//           {
//             breakpoint: 480,
//             settings: {
//               slidesToShow: 1,
//             }
//           }
//         ]
//       };

//       const images = [
//         project,
//         project1,
//         project1,
//         project1,
//         project1,
//         project1
//       ];

//       return (
//         <div className="project-wrapper container" id='Projects'>
//           <div className="my-project">
//             <h3>My Projects</h3>
//           </div>
//           <Slider {...settings}>
//             {images.map((image, index) => (
//               <div key={index} className="project-slide">
//                 <img src={image} alt={`Gallery Photo ${index + 1}`} />
//                 <h4>Chandrashila</h4>
//               </div>
//             ))}
//           </Slider>
//         </div>
//       );
// }

// export default Projects

// import Carousel from 'react-multi-carousel';
// import 'react-multi-carousel/lib/styles.css';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

function Projects() {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
      slidesToSlide: 4,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 2,
    },

    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1,
    },
  };
  return (
    <>
      <div className="my-project" id='Projects'>
        <h3>My Projects</h3>
      </div>
      <div className="container align-items-center">
        <Carousel
          swipeable={true}
          draggable={false}
          showDots={true}
          responsive={responsive}
          ssr={true} // means to render carousel on server-side.
          infinite={true}
          //   autoPlay={this.props.deviceType !== "mobile" ? true : false}
          autoPlaySpeed={1000}
          keyBoardControl={true}
          customTransition="all .5"
          transitionDuration={500}
          containerClass="carousel-container"
          removeArrowOnDeviceType={[""]}
          //   deviceType={this.props.deviceType}
          dotListClass="custom-dot-list-style"
          itemClass="carousel-item-padding-40-px"
        >
          <div className="card" style={{ }}>
            <img
              src={project}
              className="card-img-top project_card"
              alt="..."
            />
            <div className="card-body">
              <h5 className="card-title">cabonhire.co.nz</h5>
              <p className="card-text">
                Developed an international website for Cab On Hire, featuring a
                clean, responsive design for easy navigation and efficient
                booking of transport services. The site supports services like
                airport transfers and tours, optimized for both desktop and
                mobile experiences.{" "}
              </p>
              <a
                href="https://www.cabonhire.co.nz/"
                target="blank"
                className="btn btn-primary"
              >
                View Project
              </a>
            </div>
          </div>
          <div className="card" style={{ }}>
            <img
              src={project1}
              className="card-img-top  project_card"
              alt="..."
            />
            <div className="card-body">
              <h5 className="card-title">mrenggworks.com</h5>
              <p className="card-text " style={{marginBottom:"2.5rem"}}>
                Developed a professional website for M.R. Engg. Works, The site
                features detailed service and product information, emphasizing
                safety and innovation for healthcare facilities. Optimized for a
                user-friendly experience across devices.{" "}
              </p>
              <a
                href="https://www.mrenggworks.com/"
                target="blank"
                className="btn btn-primary"
              >
                View Project
              </a>
            </div>
          </div>
          <div className="card" style={{ }}>
            <img
              src={project2}
              className="card-img-top project_card"
              alt="..."
            />
            <div className="card-body">
              <h5 className="card-title">
                HIND HEALTH AND ENVIRO SOLUTIONS PVT. LTD.{" "}
              </h5>
              <p className="card-text">
                Developed a responsive website for HHES, highlighting waste
                management solutions like portable toilet cabins and FRP
                dustbins. The site emphasizes environmental sustainability and
                offers a user-friendly experience across devices.{" "}
              </p>
              <a
                href="https://hind-health-and-enviro-solutions-pvt-ltd.vercel.app/"
                target="blank"
                className="btn btn-primary"
              >
                View Project
              </a>
            </div>
          </div>
          <div className="card" style={{ }}>
            <img
              src={project3}
              className="card-img-top project_card"
              alt="..."
            />
            <div className="card-body">
              <h5 className="card-title">Chandrashila Website </h5>
              <p className="card-text"style={{marginBottom:"2.4rem"}}>
                Developed a responsive website for Banjaarey Travels, featuring
                weekend packages to Chandrahila. The site is designed for easy
                navigation, showcasing various travel options for a seamless
                user experience.{" "}
              </p>
              <a
                href="https://capable-sopapillas-14bb83.netlify.app/"
                target="blank"
                className="btn btn-primary"
              >
                View Project
              </a>
            </div>
          </div>
          <div className="card" style={{ }}>
            <img
              src={project4}
              className="card-img-top project_card"
              alt="..."
            />
            <div className="card-body">
              <h5 className="card-title">Kanak Drishti</h5>
              <p className="card-text"style={{marginBottom:"2.6rem"}}>
                Developed a responsive website for Kanak Drishti Infotech,
                focusing on their digital marketing services like SEO and web
                development. The site offers a professional, user-friendly
                experience to showcase the company  expertise.
              </p>
              <a
                href="https://kanakdrishtiinfo.com/digitalmarketing-agency/"
                target="blank"
                className="btn btn-primary"
              >
                View Project
              </a>
            </div>
          </div>
          <div className="card" style={{ }}>
            <img
              src={project5}
              className="card-img-top project_card"
              alt="..."
            />
            <div className="card-body">
              <h5 className="card-title">Car Rental Website</h5>
              <p className="card-text">
                Developed a static website for a car rental service, featuring
                easy navigation and a clear presentation of available vehicles.
                The site provides essential information on rental options and
                services, optimized for a seamless user experience across
                devices.{" "}
              </p>
              <a
                href="https://amazing-fenglisu-640005.netlify.app/"
                target="blank"
                className="btn btn-primary"
              >
                View Project
              </a>
            </div>
          </div>
        </Carousel>
      </div>
    </>
  );
}

export default Projects;
