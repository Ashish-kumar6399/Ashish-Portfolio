import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg navbar-sself  ">
      <div className="container-fluid navbar-container">
        <a className="navbar-brand navbar-logo" href="#">
         Ashish Kumar
        </a>
        <button
          className="navbar-toggler text-white text-white"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0 nav-list">
            <li className="nav-item">
              <a className="nav-link" aria-current="page" href="#">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#about">
                About Me
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#Projects">
                My Projects
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#Contact">
                Contact
              </a>
            </li>
          </ul>
          <a href="#Contact">
          <div className="navbar-connect text-black">Connect with me</div></a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
