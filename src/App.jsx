import React from "react";
import Hero from "./sections/Hero";
import ShowCase from "./sections/ShowCase";
import ShowCase3 from "./sections/ShowCase3";
import ShowCase2 from "./sections/ShowCase2";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const App = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <ShowCase />
      <ShowCase2 />
      <ShowCase3 />
      <Footer />
    </>
  );
};

export default App;
