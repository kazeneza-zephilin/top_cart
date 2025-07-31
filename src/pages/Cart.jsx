export default function CartPage({ cartItems, handleIncrement, handleDecrement, handleQuantityChange, handleRemove  }) {
    const totalPrice = cartItems.reduce(
        (total, item) => total + item.price * item.quantity,
        0
    );
    return (
        <div className="p-4">
            <h2 className="text-xl font-bold mb-4">Your Cart</h2>
            {cartItems.length === 0 ? (
                <p>Your cart is empty.</p>
            ) : (
                <div className="space-y-4">
                    {cartItems.map((item) => (
                        <div
                            key={item.id}
                            className="flex justify-between items-center bg-white p-4 rounded shadow"
                        >
                            <div>
                                <div className="h-24 w-24 flex items-center justify-center">
                                    <img
                                        src={item.image}
                                        alt={item.title}
                                        className="object-contain h-full"
                                    />
                                </div>
                                <h3 className="font-semibold">{item.title}</h3>
                                <p>Price: ${item.price}</p>
                                <div className="flex items-center space-x-2 mt-1">
                                    <button
                                        onClick={() => handleDecrement(item.id)}
                                        className="px-2 py-1 bg-gray-200 rounded hover:bg-gray-300"
                                    >
                                        -
                                    </button>
                                    <input
                                        type="number"
                                        value={item.quantity}
                                        onChange={(e) =>
                                            handleQuantityChange(
                                                item.id,
                                                Number(e.target.value)
                                            )
                                        }
                                        className="w-12 text-center border rounded"
                                        min="1"
                                    />
                                    <button
                                        onClick={() => handleIncrement(item.id)}
                                        className="px-2 py-1 bg-gray-200 rounded hover:bg-gray-300"
                                    >
                                        +
                                    </button>
                                    <button
                                        onClick={() => handleRemove(item.id)}
                                        className="ml-4 px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600"
                                    >
                                        Delete
                                    </button>
                                </div>
                            </div>
                            <p className="font-bold">
                                ${(item.price * item.quantity).toFixed(2)}
                            </p>
                        </div>
                    ))}
                    <div className="text-right font-bold text-lg">
                        Total: ${totalPrice.toFixed(2)}
                    </div>
                </div>
            )}
        </div>
    );
}
