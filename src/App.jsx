import "./App.css";
import Projects from "./components/content/Projects";
import Header from "./components/Header";
import NavBar from "./components/NavBar";
import Skills from './components/content/Skills'
import Contact from "./components/Contact";
import Footer from "./components/Footer"
import About from "./components/About"

function App() {

  return (
    <div className="App">
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
