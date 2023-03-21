import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Carte from "./pages/Carte";
import Admin from "./pages/Admin";
import { AuthContextProvider } from "./store/authContext";

export default function App() {
  return (
    <BrowserRouter id="App" className="App">
      <AuthContextProvider>
        <Routes>
          <Route exact path="/quai-antique" element={<Home />} />
          <Route exact path="/carte" element={<Carte />} />
          <Route exact path="/admin" element={<Admin />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </AuthContextProvider>
    </BrowserRouter>
  );
}
