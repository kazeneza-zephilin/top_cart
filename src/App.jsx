import { createContext, useState } from "react";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Shop from "./pages/Shop.jsx";
import Cart from "./pages/Cart.jsx";
import Home from "./pages/Home.jsx";
export const CartContext = createContext(null);

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
    const handleIncrement = (id) => {
        setCartItems((prev) =>
            prev.map((item) =>
                item.id === id ? { ...item, quantity: item.quantity + 1 } : item
            )
        );
    };

    const handleDecrement = (id) => {
        setCartItems((prev) =>
            prev.map((item) =>
                item.id === id && item.quantity > 1
                    ? { ...item, quantity: item.quantity - 1 }
                    : item
            )
        );
    };

    const handleQuantityChange = (id, value) => {
        setCartItems((prev) =>
            prev.map((item) =>
                item.id === id ? { ...item, quantity: value } : item
            )
        );
    };

    const handleRemove = (id) => {
        setCartItems((prev) => prev.filter((item) => item.id !== id));
    };

    return (
        <CartContext.Provider
            value={{
                cartItems,
                handleIncrement,
                handleDecrement,
                handleQuantityChange,
                handleRemove,
            }}
        >
            <Router>
                <Navbar
                    cartCount={cartItems.reduce(
                        (total, item) => total + item.quantity,
                        0
                    )}
                />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route
                        path="/shop"
                        element={<Shop addToCart={handleAddToCart} />}
                    />
                    <Route path="/cart" element={<Cart />} />
                </Routes>
            </Router>
        </CartContext.Provider>
    );
};

export default App;
