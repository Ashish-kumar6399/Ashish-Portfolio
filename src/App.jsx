import "./App.css";
import Navbar from "./components/navbar/Navbar";
import Hero from "./components/hero/Hero";
import About from "./components/about/About";
import Projects from "./components/Projects/Projects";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";
import Heronew from "./components/Heronew/Heronew";

const App = () => {
  return (
    <div>
      <Navbar />
      <Heronew/>
      {/* <Hero /> */}
      <About />
      <Projects/>
      <Contact/>
      <Footer/>
    </div>
  );
};

export default App;
