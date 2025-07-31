import { Link } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import Cart from "../pages/Cart.jsx";

const Navbar = ({ cartCount }) => {
  console.log(cartCount);

    return (
        <nav>
            <div className="container flex flex-row p-4 justify-center items-center bg-[var(--color-secondary)]">
                <div className="flex items-center text-2xl">hirwa shop</div>
                <div className="flex mx-auto items-center space-x-24">
                    <Link
                        to="/"
                        className="font-bold text-blue-400 hover:text-blue-500"
                    >
                        Home
                    </Link>
                    <Link
                        to="/shop"
                        className="font-bold text-blue-400 hover:text-blue-500"
                    >
                        Shop
                    </Link>
                    <Link
                        to="/cart"
                        className="flex items-center font-bold text-blue-400 hover:text-blue-500"
                    >
                        <div className="relative">
                            <FaShoppingCart className="text-2xl" />
                            {cartCount > 0 && (
                                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
                                    {cartCount}
                                </span>
                            )}
                        </div>
                    </Link>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
