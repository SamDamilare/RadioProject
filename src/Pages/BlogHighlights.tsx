import React from "react";
import BlogDetails from "../Components/BlogHighlights/BlogDetails";
import Navbar from "../Components/Navigation/Navbar";
import BlogImage from "../Components/BlogHighlights/BlogImage";
import BlogNav from "../Components/BlogHighlights/BlogNav";
import BlogPost from "../Components/BlogHighlights/BlogPost";
import Newsletter from "../Components/Home/Newsletter";

const BlogHighlights = () => {
  return (
    <div>
      <Navbar />
      <BlogDetails />
      <BlogImage />
      <BlogNav />
      <BlogPost />
      <Newsletter />
    </div>
  );
};

export default BlogHighlights;
