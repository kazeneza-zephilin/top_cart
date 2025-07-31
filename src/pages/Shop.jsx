import axios from "axios";
import { useState, useEffect } from "react";

const Shop = () => {
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
        <div className="shop grid grid-cols-1 md:grid-cols-4 gap-4 p-4">
            {products.map((product) => (
                <div
                    key={product.id}
                    className="bg-white rounded-2xl p-4 shadow-md hover:shadow-lg transition-shadow duration-300 flex flex-col items-center"
                >
                    <div className="product-image mb-4 h-40 flex flex-center justify-center overflow-hidden rounded-lg bg-gray-100">
                        <img
                            src={product.image}
                            alt={product.title}
                            className="object-contain h-full"
                        />
                    </div>
                    <h2 className="text-base font-semibold text-gray-800 mb-1 line-clamp-2 ">{product.title}</h2>
            
                    <p className="text-sm text-gray-600 line-clamp-2">{product.description}</p>

                    <div className="mt-auto">
                      <p className="text-sm font-bold text-blue-600">Price: ${product.price}</p>
                      <p className="text-xs text-gray-500 italic">{product.category}</p>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Shop;
