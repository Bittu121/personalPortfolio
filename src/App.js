import { useEffect, useState, Suspense, lazy } from "react";
import { AnimatePresence } from "framer-motion";
import Navbar from "./components/navbar/Navbar";
import HeroSection from "./components/hero/HeroSection";
import Loading from "./components/Loading";

// Below-the-fold sections — lazy loaded, so their JS downloads only when
// needed. Each loader is kept alongside its lazy component so the same
// function can both render the section and preload it ahead of time.
const SECTIONS = [
  { name: "About", loader: () => import("./components/about/About") },
  {
    name: "SkillSection",
    loader: () => import("./components/skill/SkillSection"),
  },
  { name: "Project", loader: () => import("./components/project/Project") },
  {
    name: "Achievements",
    loader: () => import("./components/achievements/Achievements"),
  },
  {
    name: "Experience",
    loader: () => import("./components/experience/Experience"),
  },
  {
    name: "ContactUs",
    loader: () => import("./components/contact/ContactUs"),
  },
  { name: "Footer", loader: () => import("./components/footer/Footer") },
  { name: "ScrollToTop", loader: () => import("./components/ScrollToTop") },
].map((section) => ({ ...section, Component: lazy(section.loader) }));

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    window.history.scrollRestoration = "manual";
    window.scrollTo(0, 0);

    // Preload every section once the page is idle, so nav clicks land instantly.
    // requestIdleCallback waits for a quiet moment (with setTimeout fallback).
    const preload = () => SECTIONS.forEach(({ loader }) => loader());
    const idle = window.requestIdleCallback || ((fn) => setTimeout(fn, 200));
    const id = idle(preload);
    return () => (window.cancelIdleCallback || clearTimeout)(id);
  }, []);

  useEffect(() => {
    // Show the loading screen for at least a bit, and until the page has
    // actually finished loading — whichever takes longer.
    const minTime = new Promise((resolve) => setTimeout(resolve, 1200));
    const pageLoaded = new Promise((resolve) => {
      if (document.readyState === "complete") {
        resolve();
      } else {
        window.addEventListener("load", resolve, { once: true });
      }
    });

    Promise.all([minTime, pageLoaded]).then(() => setIsLoading(false));
  }, []);

  return (
    <>
      <AnimatePresence>{isLoading && <Loading />}</AnimatePresence>

      {!isLoading && (
        <>
          <Navbar />
          <HeroSection />

          <Suspense fallback={null}>
            {SECTIONS.map(({ name, Component }) => (
              <Component key={name} />
            ))}
          </Suspense>
        </>
      )}
    </>
  );
};

export default App;
