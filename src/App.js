import React from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Carte from "./pages/Carte";
import Home from "./pages/Home";

const App = () => {
  return (
    <BrowserRouter id="App" className="App">
      <Routes>
        <Route exact path="/quai-antique" element={<Home />} />
        <Route exact path="/Carte" element={<Carte />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
};
export default App;
