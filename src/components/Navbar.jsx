import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav>
      <div className="container flex flex-row p-4 justify-between items-center bg-[var(--color-secondary)]">
        <div className="flex items-center text-2xl">hirwa shop</div>
        <div className="flex mx-auto items-center space-x-24">
          <Link to="/" className="font-bold text-blue-400 hover:text-blue-500">Home</Link>
          <Link to="/shop" className="font-bold text-blue-400 hover:text-blue-500">Shop</Link>
        </div>
      </div>
    </nav>
  )
}

export default Navbar