import React from "react";
import "../App.css";
import About from "../Components/About";
import Footer from "../Components/Footer";
import Header from "../Components/Header";
import Menus from "../Components/Menus";
import Navbar from "../Components/Navbar";
import OpeningHours from "../Components/OpeningHours";
import ScrollToTop from "../Components/ScrollToTop";
import Reservation from "../Components/Reservation";
import Test from "../Components/Test";

export default function Home() {
  window.scrollTo(0, 0);
  return (
    <div id="App" className="App">
      <Navbar />
      <Reservation />
      <Header />
      <About />
      <Menus />
      <OpeningHours />
      <Footer />
      <ScrollToTop />
      <Test />
    </div>
  );
}
