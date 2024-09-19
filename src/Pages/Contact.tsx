
import ContactDetails from "../Components/Contact/ContactDetails";
import ContactForm from "../Components/Contact/ContactForm";
import Navbar from "../Components/Navigation/Navbar";
import Shows from "../Components/Home/Shows";
import Podcast from "../Components/Home/Podcast";
import BlogTab from "../Components/Home/BlogTab";
import Footer from "../Components/Navigation/Footer";
import MusicBar from "../Components/Reuseable/MusicBar";

const Contact = () => {
  return (
    <div>
      <Navbar />
      <ContactDetails />
      <ContactForm />
      <Shows />
      <Podcast />
      <BlogTab />
      <Footer />
      <MusicBar />
    </div>
  );
};

export default Contact;
