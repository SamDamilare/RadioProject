import { Navigate } from "react-router-dom";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Blog from "./Pages/Blog";
import Schedule from "./Pages/Schedule";
import Contact from "./Pages/Contact";

export default [
  {
    path: "/",
    element: <Home />,
    name: "Home",
  },
  {
    path: "/about",
    element: <About />,
    name: "About",
  },
  {
    path: "/blog",
    element: <Blog />,
    name: "Blog",
  },
  {
    path: "/schedule",
    element: <Schedule />,
    name: "Schedule",
  },
  {
    path: "/contact",
    element: <Contact />,
    name: "Contact",
  },
  {
    path: "*",
    element: <Navigate to={"/"} replace />,
    name: "Notfound",
  },
];
