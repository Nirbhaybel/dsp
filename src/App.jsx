import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Publications from "./components/Publications";
import Patents from "./components/Patents";
import Awards from "./components/Awards";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

import DSPLab from "./components/DSPLab";   // <-- CHANGE

export default function App() {

  return (
    <>
      <Navbar />
      <Hero />
      <About />

      <Experience />
      <Projects />
      <Skills />
      <Publications />
      <Patents />
      <Awards />

      <DSPLab />        {/* <-- CHANGE */}

      <Contact />
      <Footer />
    </>
  );
}