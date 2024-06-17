import React, { useEffect } from "react";
import Home from "./pages/Home";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import Footer from "./layout/Footer";
import Navigation from "./layout/Navigation";

const App = () => {
  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    // ScrollTrigger.normalizeScroll({});
    // ScrollTrigger.config({ ignoreMobileResize: true });

    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Navigation />
      <Home />
      <Footer />
    </>
  );
};

export default App;
