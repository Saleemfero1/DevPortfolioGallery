import Navbar from "./components/navbar/Navbar";
import Intro from "./components/intro/intro";
import About from "./components/about/about";
import Skills from "./components/Skills/Skills";
import Experience from "./components/Experience/experience";
import Project from "./components/projects/project";
import Education from "./components/Education/education";
function App() {
  return (
    <div>
      <Navbar />
      <Intro />
      <About />
      <Skills />
      <Experience />
      <Project />
      <Education />
    </div>
  );
}

export default App;
