const ProductCard = ({ product, addToCart }) => {
    return (
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
            <h2 className="text-base font-semibold text-gray-800 mb-1 line-clamp-2 ">
                {product.title}
            </h2>

            <p className="text-sm text-gray-600 line-clamp-2">
                {product.description}
            </p>

            <div className="mt-auto">
                <p className="text-sm font-bold text-blue-600">
                    Price: ${product.price}
                </p>
                <p className="text-xs text-gray-500 italic">
                    {product.category}
                </p>
                <button
                    onClick={addToCart}
                    className="font-bold cursor-pointer px-4 py-2 bg-blue-400 w-auto text-white hover:bg-blue-700"
                >
                    Add to Cart
                </button>
            </div>
        </div>
    );
};

export default ProductCard;
