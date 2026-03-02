import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import Portfolio from "./components/Portfolio";
import Blog from "./components/Blog";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import TeamCarousel from "./components/TeamCarousel";

export default function App() {
  return (
    <div className="bg-[#07000f] text-white antialiased">
      <Navbar />
      <Hero />
      <Services />
      <About />
      <TeamCarousel />
      <Portfolio />
      {/* <Blog /> */}
      {/* <Testimonials /> */}
      <Contact />
      <Footer />
    </div>
  );
}
