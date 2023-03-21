import React, { useEffect } from "react";
import "../App.css";
import About from "../Components/About";
import Footer from "../Components/Footer";
import Header from "../Components/Header";
import Menus from "../Components/Menus";
import Navbar from "../Components/Navbar";
import OpeningHours from "../Components/OpeningHours";
import ScrollToTop from "../Components/ScrollToTop";
import BookingModal from "../Components/BookingModal";
import AdminButton from "../Components/UI/AdminButton";

export default function Home() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div id="App" className="App">
      <Navbar />
      <BookingModal />
      <AdminButton />
      <Header />
      <About />
      <Menus />
      <OpeningHours />
      <Footer />
      <ScrollToTop />
    </div>
  );
}
