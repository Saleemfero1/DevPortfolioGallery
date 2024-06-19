import Navbar from "./components/navbar/Navbar";
import Intro from "./components/intro/intro";
import About from "./components/about/about";
import Skills from "./components/Skills/Skills";
import Experience from "./components/Experience/experience";
import Project from "./components/projects/project";
import Education from "./components/Education/education";
import Contact from "./components/Contact/contact";
import ScrollTop from "./components/scrollTop/ScrollTop";
import Footer from "./components/footer/footer";

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
      <Contact />
      <ScrollTop />
      <Footer />
    </div>
  );
}

export default App;
