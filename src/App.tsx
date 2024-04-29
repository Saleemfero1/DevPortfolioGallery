import Navbar from "./components/navbar/Navbar";
import Intro from "./components/intro/intro";
import About from "./components/about/about";
import Skills from "./components/Skills/Skills";
import Experience from "./components/Experience/experience";
function App() {
  return (
    <div>
      <Navbar />
      <Intro />
      <About />
      <Skills />
      <Experience />
    </div>
  );
}

export default App;
