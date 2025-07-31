import React from "react";
import Navbar from "./components/Navbar";
import { Link } from "react-router-dom";

const App = () => {
    return (
        <div>
            <Navbar />
            <div className="container mx-auto p-4">
                <h1 className="text-3xl font-bold mb-4">
                    Welcome to Hirwa Shop
                </h1>
                <p className="text-gray-700">
                    Explore our collection of products.
                </p>
                <button className="mt-4">
                    <Link
                        to="/shop"
                        className="font-bold bg-blue-400 text-white px-4 py-2 hover:bg-blue-500"
                    >
                        Go to Shop
                    </Link>
                </button>
            </div>
        </div>
    );
};

export default App;
