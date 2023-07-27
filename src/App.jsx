import "./App.css";
import Header from "./components/Header";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer"
import Projects from "./sections/Projects";
import Skills from './sections/Skills'
import Contact from "./sections/Contact";
import About from "./sections/About"

function App() {

  return (
    <div className="gradient">
      <NavBar />
      <Header />
      <About/>
      <Projects />
      <Skills />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
