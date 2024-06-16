import React, { useEffect } from "react";
import Home from "./pages/Home";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import Footer from "./layout/Footer";

const App = () => {
  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    // ScrollTrigger.normalizeScroll({});
    // ScrollTrigger.config({ ignoreMobileResize: true });

    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Home />
      <Footer />
    </>
  );
};

export default App;
