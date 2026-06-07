import { useEffect, Suspense, lazy } from "react";

// Eagerly loaded — visible immediately on page load
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";

// Each loader is kept in a variable so we can both lazy-render AND preload it
const loadAbout = () => import("./components/About");
const loadSkill = () => import("./components/SkillSection");
const loadProject = () => import("./components/Project");
const loadExperience = () => import("./components/Experience");
const loadEducation = () => import("./components/Education");
const loadContact = () => import("./components/ContactUs");
const loadFooter = () => import("./components/Footer");
const loadSocial = () => import("./components/SocialLinks");
const loadScrollTop = () => import("./components/ScrollToTop");

// Lazy loaded — JS for these sections downloads only when needed
const About = lazy(loadAbout);
const SkillSection = lazy(loadSkill);
const Project = lazy(loadProject);
const Experience = lazy(loadExperience);
const Education = lazy(loadEducation);
const ContactUs = lazy(loadContact);
const Footer = lazy(loadFooter);
const SocialLinks = lazy(loadSocial);
const ScrollToTop = lazy(loadScrollTop);

function App() {
  useEffect(() => {
    window.history.scrollRestoration = "manual";
    window.scrollTo(0, 0);

    // Preload every section once the page is idle, so nav clicks land instantly.
    // requestIdleCallback waits for a quiet moment (with setTimeout fallback).
    const preload = () => {
      loadAbout();
      loadSkill();
      loadProject();
      loadExperience();
      loadEducation();
      loadContact();
      loadFooter();
      loadSocial();
      loadScrollTop();
    };
    const idle = window.requestIdleCallback || ((fn) => setTimeout(fn, 200));
    const id = idle(preload);
    return () => (window.cancelIdleCallback || clearTimeout)(id);
  }, []);

  return (
    <>
      {/* Above the fold — always loads immediately */}
      <Navbar />
      <HeroSection />

      {/* Below the fold — lazy loaded, fallback={null} means no spinner shown */}
      <Suspense fallback={null}>
        <About />
        <SkillSection />
        <Project />
        <Experience />
        <Education />
        <ContactUs />
        <Footer />
        <SocialLinks />
        <ScrollToTop />
      </Suspense>
    </>
  );
}

export default App;
