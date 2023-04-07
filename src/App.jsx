import Navbar from "./components/common/Navbar";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import Services from "./components/Services";
import Projects from "./components/Projects";
import HireMe from "./components/HireMe";
import Contact from "./components/Contact";
import Footer from "./components/common/Footer";

import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import HireMeModal from "./components/HireMeModal";

function App() {
  useEffect(() => {
    Aos.init({
      duration: 1800,
      offset: 100,
      disable: "mobile",
    });
  }, []);

  return (
    <div>
      <Navbar />
      <Hero />
      <Skills />
      <Services />
      <Projects />
      <HireMe />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
