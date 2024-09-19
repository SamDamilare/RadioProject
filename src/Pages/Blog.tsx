import BlogPills from "../Components/BlogHighlights/Blog/BlogPills";
import BlogTab from "../Components/Home/BlogTab";
import BlogPageNav from "../Components/BlogHighlights/Blog/BlogPageNav";
import Newsletter from "../Components/Home/Newsletter";
import Navbar from "../Components/Navigation/Navbar";
import MusicBar from "../Components/Reuseable/MusicBar";
import Footer from "../Components/Navigation/Footer";

const Blog = () => {
  return (
    <div>
      <Navbar />
      <BlogPills />
      <BlogTab />
      <BlogPageNav />
      <Newsletter />
      <Footer />
      <MusicBar />
    </div>
  );
};

export default Blog;
