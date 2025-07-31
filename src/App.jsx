import React from "react";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Shop from "./pages/shop.jsx";
import Cart from "./pages/Cart.jsx";
import Home from "./pages/Home.jsx";
import { useState } from "react";

const App = () => {
    const [cartItems, setCartItems] = useState([]);

    const handleAddToCart = (product) => {
        setCartItems((prevItems) => {
            const exists = prevItems.find((item) => item.id === product.id);
            if (exists) {
                return prevItems.map((item) =>
                    item.id === product.id
                        ? { ...item, quantity: item.quantity + 1 }
                        : item
                );
            } else {
                return [...prevItems, { ...product, quantity: 1 }];
            }
        });
    };

    return (
        <Router>
            <Navbar cartCount={cartItems.reduce((total, item) => total + item.quantity, 0)} />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/shop" element={<Shop addToCart={handleAddToCart} />} />
                <Route path="/cart" element={<Cart cartItems={cartItems} />} />
            </Routes>
        </Router>
    );
};

export default App;
