import React, { useEffect } from "react";
import Home from "./pages/Home";

const App = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Home />
    </>
  );
};

export default App;
