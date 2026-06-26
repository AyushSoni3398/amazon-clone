import { useState } from "react";
import Navbar from "./components/Navbar";
import SecondaryNavbar from "./components/SecondaryNavbar";
import Home from "./pages/Home";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Cart from "./pages/Cart";
import Login from "./pages/Login";
import Register from "./pages/Register";

function App() {

  const [cart, setCart] = useState([]);
  const [search, setSearch] = useState("");

  return (
    <>
      <Navbar
        cart={cart}
        search={search}
        setSearch={setSearch}
      />
      <SecondaryNavbar />

      <Routes>
        <Route
          path="/"
          element={
            <Home
              setCart={setCart}
              search={search}
            />
          }
        />

        <Route
          path="/cart"
          element={
            <Cart
              cart={cart}
              setCart={setCart}
            />
          }
        />

        <Route
          path="/login"
          element={<Login />}
        />

        <Route
          path="/register"
          element={<Register />}
        />
        
      </Routes>
    </>
  );
}

export default App;