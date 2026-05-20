import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Marquee from "./components/Marquee";
import About from "./components/About";
import Works from "./components/Works";
import Logos from "./components/Logos";
import ProjectGallery from "./components/ProjectGallery";
import Services from "./components/Services";
import Process from "./components/Process";
import Testimonials from "./components/Testimonials";
import CTA from "./components/CTA";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Marquee />
      <About />
      <Works />
      <Logos />
      <ProjectGallery />
      <Services />
      <Process />
      <Testimonials />
      <CTA />
      <Footer />
    </>
  );
}

export default App;