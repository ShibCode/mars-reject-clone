import React, { useEffect } from "react";
import Home from "./pages/Home";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

const App = () => {
  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    ScrollTrigger.normalizeScroll(true);

    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Home />
    </>
  );
};

export default App;
