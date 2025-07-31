import axios from "axios";
import { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import ProductCard from "../components/ProductCard.jsx";

const Shop = ({ addToCart }) => {

    const [products, setProducts] = useState([]);


    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await axios.get(
                    "https://fakestoreapi.com/products"
                );
                setProducts(response.data);
            } catch (error) {
                console.error("Error fetching products:", error);
            }
        };
        fetchProducts();
    }, []);

    return (
      <>
        <div className="shop grid grid-cols-1 md:grid-cols-4 gap-4 p-4">
            {products.map((product) => (
                <ProductCard
                    key={product.id}
                    product={product}
                    addToCart={() => addToCart(product)}
                />
            ))}
        </div>
        </>
    );
};

export default Shop;
