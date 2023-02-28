import React from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Carte from "./pages/Carte";
import Home from "./pages/Home";

export default function App() {
  return (
    <BrowserRouter id="App" className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Carte" element={<Carte />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}
