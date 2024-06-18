import React from "react";
import Hero from "./Hero";
import Story from "./Story";
import Collections from "./Collections";
import AboutArt from "./AboutArt";
import Roadmap from "./Roadmap";
import Team from "./Team";
import Faqs from "./Faqs";
import Banner from "./Banner";

const Home = () => {
  return (
    <>
      <div id="top"></div>
      <Hero />
      <Story />
      <Collections />
      <AboutArt />
      <Roadmap />
      <Team />
      <Faqs />
      <div className="w-full overflow-hidden">
        <Banner />
      </div>
    </>
  );
};

export default Home;
