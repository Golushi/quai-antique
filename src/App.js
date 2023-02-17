import React from "react";
import About from "./Components/About";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Menus from "./Components/Menus";
import Navbar from "./Components/Navbar";
import OpeningHours from "./Components/OpeningHours";
import ScrollToTop from "./Components/ScrollToTop";

export default function App() {
  return (
    <>
      <ScrollToTop />
      <Navbar />
      <Header />
      <About />
      <Menus />
      <OpeningHours />
      <Footer />
    </>
  );
}
