import ScheduleGrid from "../Components/Schedule/ScheduleGrid";
import Shows from "../Components/Home/Shows";
import Podcast from "../Components/Home/Podcast";
import Newsletter from "../Components/Home/Newsletter";
import Navbar from "../Components/Navigation/Navbar";
import Hero from "../Components/Home/Hero";
import BlogTab from "../Components/Home/BlogTab";
import Footer from "../Components/Navigation/Footer";
import MusicBar from "../Components/Reuseable/MusicBar";

const Schedule = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <ScheduleGrid />
      <Shows />
      <Podcast />
      <Newsletter />
      <BlogTab />
      <Footer />
      <MusicBar />
    </div>
  );
};

export default Schedule;
