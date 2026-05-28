import { useEffect } from "react";
import "./App.css";

import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import About from "./components/About";
import SkillSection from "./components/SkillSection";
import Project from "./components/Project";
import Experience from "./components/Experience";
import Education from "./components/Education";
import ContactUs from "./components/ContactUs";
import Footer from "./components/Footer";
import SocialLinks from "./components/SocialLinks";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  useEffect(() => {
    window.history.scrollRestoration = "manual";
    window.scrollTo(0, 0);
    document.documentElement.style.scrollBehavior = "smooth";
  }, []);

  return (
    <>
      <Navbar />
      <HeroSection />
      <About />
      <SkillSection />
      <Project />
      <Experience />
      <Education />
      <ContactUs />
      <Footer />
      <SocialLinks />
      <ScrollToTop />
    </>
  );
}

export default App;
