import AboutUs from "../Components/About/AboutUs";
import Navbar from "../Components/Navigation/Navbar";
import Hero from "../Components/Home/Hero";
import Services from "../Components/About/Services";
import Podcast from "../Components/Home/Podcast";
import Newsletter from "../Components/Home/Newsletter";
import Testimonials from "../Components/About/Testimonials";
import BlogTab from "../Components/Home/BlogTab";
import Footer from "../Components/Navigation/Footer";
import MusicBar from "../Components/Reuseable/MusicBar";

const About = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <AboutUs />
      <Services />
      <Podcast />
      <Newsletter />
      <Testimonials />
      <BlogTab />
      <Footer />
      <MusicBar />
    </div>
  );
};

export default About;
