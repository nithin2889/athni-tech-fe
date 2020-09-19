import React from "react";
import "../../App.css";
import Card from "../card/card.component";
import Footer from "../footer/footer.component";
import HeroSection from "../hero/hero.component";

function Home() {
  return (
    <>
      <HeroSection />
      <Card />
      <Footer />
    </>
  );
}

export default Home;
