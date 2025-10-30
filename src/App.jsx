import Navbar from "./components/Navbar/Navbar";
import Hero from "./Components/Hero/Hero";
import Projects from "./Components/Projects/Projects";
import Lenis from "lenis";
import Experience from "./Components/Experience/Experience";
import About from "./Components/About/About";
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
    </div>
  );
};

export default App;
