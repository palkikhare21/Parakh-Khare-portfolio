import Navbar from "../components/Navbar";
import Cursor from "../components/Cursor";
import Hero from "../components/Hero";
import Intro from "../components/Intro";

import About from "../sections/About";
import Logofolio from "../sections/Logofolio";
import VisualIdentity from "../sections/VisualIdentity";
import Branding from "../sections/Branding";
import SocialMedia from "../sections/SocialMedia";
import Packaging from "../sections/Packaging";
import Contact from "../sections/Contact";

import Footer from "../components/Footer";

const Home = () => {
  return (
    <>
      <Cursor />

      <Navbar />

      <main>

        <Hero />

        <Intro />

        <About />

        <Logofolio />

        <VisualIdentity />

        <Branding />

        <SocialMedia />

        <Packaging />

        <Contact />

      </main>

      <Footer />
    </>
  );
};

export default Home;