import Navbar from "../Components/Navigation/Navbar";
import Hero from "../Components/Home/Hero";
import Shows from "../Components/Home/Shows";
import Podcast from "../Components/Home/Podcast";
import Newsletter from "../Components/Home/Newsletter";
import BlogTab from "../Components/Home/BlogTab";
// import MusicBar from "../Components/Reuseable/MusicBar";
import Footer from "../Components/Navigation/Footer";
import MixLR from "../Components/Reuseable/MixLR";


const Home = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Shows />
      
      <Podcast />
      <Newsletter />
      <BlogTab />
      <Footer />
      {/* <MusicBar /> */}
      <MixLR />
    </div>
  );
};

export default Home;
