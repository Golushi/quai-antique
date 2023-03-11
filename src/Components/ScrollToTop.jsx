import React from "react";
import "../App.css";
import ScrollToTop from "react-scroll-to-top";

export default function Scroll() {
  return (
    <div>
      <ScrollToTop
        className="flex justify-center transform duration-500 hover:scale-125 items-center"
        smooth
        color="#6F8695"
      />
    </div>
  );
}
