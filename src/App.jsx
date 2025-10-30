import Navbar from "./components/Navbar/Navbar";
import Hero from "./Components/Hero/Hero";
import Projects from "./Components/Projects/Projects";
import Lenis from "lenis";
import Experience from "./Components/Experience/Experience";
import About from "./Components/About/About";
import ScrollProgressBar from "./Components/Scroll Progress Bar/ScrollProgressBar";
import GitStats from "./Components/Github stats/GitStats";
const App = () => {

  // Initialize Lenis
  new Lenis({
    autoRaf: true,
  });


  return (
    <div>
      <Navbar />
      <Hero />
      <About/>
      <Projects />
      <Experience/>
      <ScrollProgressBar/>
      <GitStats/>
    </div>
  );
};

export default App;
