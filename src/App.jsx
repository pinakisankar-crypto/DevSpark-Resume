import Navbar from "./components/Navbar/Navbar";
import Hero from "./Components/Hero/Hero";
import Projects from "./Components/Projects/Projects";
import Lenis from "lenis";
import Experience from "./Components/Experience/Experience";
import About from "./Components/About/About";
import ScrollProgressBar from "./Components/Scroll Progress Bar/ScrollProgressBar";
import GitStats from "./Components/Github stats/GitStats";
import Contact from "./Components/Contact/Contact";
import Footer from "./Components/Footer/Footer";
import Skills from "./Components/Skills/Skills";
const App = () => {

  // Initialize Lenis
  new Lenis({
    autoRaf: true,
  });


  return (
    <div>
      <Navbar />
      <Hero />
      <Projects />
      <About/>
      <Experience/>
      <Skills/>
      <ScrollProgressBar/>
      <GitStats/>
      <Contact/>
      <Footer/>
    </div>
  );
};

export default App;
