import "./Contact.css";
import Swal from "sweetalert2";

const Contact = () => {
  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "b3efe1eb-f2f1-4880-8238-c1d1bd719c5e");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: json,
    }).then((res) => res.json());

    if (res.success) {
      Swal.fire({
        title: "Success!",
        text: "Message sent successfully!",
        icon: "success",
      });
    }
  };

  return (
    <div id="contact " >
      <section className="row contact-section"  id="Contact">
        <div className="row text-center contact-text1">
          <h1>
            Get In Touch
          </h1>
        </div>

        <div className="info-container col-lg-6">
          <div className="informations">
            <h1> Let s Talk</h1>
            <p>Frontend Developer with 6 months of experience in building responsive, user-friendly web applications using HTML, CSS, JavaScript, React, Next.js, Express.js, Bootstrap, and Tailwind CSS. Passionate about crafting clean and engaging digital experiences.</p>
            <div className="logo-contact">
            <i className="fa-solid fa-envelope fa-lg"></i> ashishkumar541712@gmail.com
            </div>
            <div className="logo-contact">
            <i className="fa-solid fa-phone fa-lg"></i> +91 8750916798
            </div>
            <div className="logo-contact">
            <i className="fa-solid fa-location-dot fa-lg"></i> New Ashok Nagar,New Delhi
            </div>
            <div className="logo-contact">
              <a href="https://www.linkedin.com/in/ashish-kumar-7863b2271/" target="blank">  <i className="fa-brands fa-linkedin text-white" style={{fontSize:"2rem"}}></i></a>
              <a href="https://www.instagram.com/ashish_gupta_198?igsh=MTN1ZXd4cnlucDhueA%3D%3D&utm_source=qr" target="blank"><i className="fa-brands fa-instagram text-white"  style={{fontSize:"2rem"}}></i></a>
             
              <a href="https://api.whatsapp.com/send?phone=+918750916798&text=Your%20message%20here" target="blank">
              <i className="fa-brands fa-whatsapp text-white" style={{fontSize:"2rem"}}></i>
            </a>
            </div>
          </div>
        </div>

        <div className="col-lg-6">
          <div className="row">
            <div className="contact-form">
              <form action="#" onSubmit={onSubmit}>
                <input type="text" name="name" placeholder="Name" required />
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  required
                />
                <input
                  type="number"
                  name="number"
                  placeholder="Number"
                  required
                />

                <textarea
                  name="message"
                  placeholder="Message"
                  required
                ></textarea>
                <button type="submit">Send Message</button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;

