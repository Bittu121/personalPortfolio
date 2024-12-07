import "./App.css";
import About from "./components/About";
import ContactUs from "./components/ContactUs";
import Experience from "./components/Experience";
import Footer from "./components/Footer";
import Home from "./components/home/Home";
import SocialLinks from "./components/home/SocialLinks";
import Navbar from "./components/Navbar";
import Portfolio from "./components/Portfolio";

function App() {
  return (
    <>
      <Navbar />
      <Home />
      <About />
      <Portfolio />
      <Experience />
      <ContactUs />
      <Footer/>
      <SocialLinks />
    </>
  );
}

export default App;
