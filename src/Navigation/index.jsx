import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Header } from "../Components/Header"
import Home from "../Pages/Home";
import Cart from "../Pages/Cart";
import Login from "../Pages/Login";
import Menu from "../Pages/Menu";
import Register from "../Pages/Register";

const Navigation = () => {
    return (
        <BrowserRouter>
            <Header></Header>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/Cart" element={<Cart />} />
                <Route path="/Login" element={<Login />} />
                <Route path="/Menu" element={<Menu />} />
                <Route path="/Register" element={<Register />} />
            </Routes>
        </BrowserRouter>
    )
}

export default Navigation;