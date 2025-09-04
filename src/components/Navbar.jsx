import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import { useCart } from "./CartContext";
import { MdMenu, MdClose } from "react-icons/md";
import { FaCartShopping } from "react-icons/fa6";
import logo from "../../src/assets/LogoAru.png";

const Navbar = () => {
  const { cartCount, cartItems } = useCart();
  const [showCart, setShowCart] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const { pathname } = useLocation();

  const menuItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
    { name: "Location", path: "/location" },
  ];

  return (
    <header className="w-full bg-yellow-950 z-90 text-white py-4 px-6 flex justify-between items-center shadow-md fixed top-0 z-50 rounded-b-lg">
      {/* Logo */}
      <div className="flex items-center gap-3">
        <img src={logo} alt="Logo" className="h-9 md:h-20 object-contain" />
        <h1 className="text-sm md:ms-3 md:text-2xl font-bold text-yellow-500">
          Arunika Cafe
        </h1>
      </div>

      {/* Desktop Navigation */}
      <nav className="hidden md:flex items-center gap-4 me-13 relative">
        {menuItems.map((item, idx) => (
          <Link
            key={idx}
            to={item.path}
            className={`font-bold hover:text-yellow-500 text-lg transition duration-300 ${
              pathname === item.path ? "text-yellow-500" : "text-white"
            }`}
          >
            {item.name}
          </Link>
        ))}

        {/* Cart Icon Desktop */}
        <div className="relative">
          <FaCartShopping
            size={22}
            className="ms-2 hover:text-yellow-500 cursor-pointer mt-1"
            onClick={() => setShowCart(!showCart)}
          />
          {cartCount > 0 && (
            <span className="absolute -top-2 -right-2 bg-red-500 text-black text-xs font-bold rounded-full px-2 py-0.5">
              {cartCount}
            </span>
          )}
        </div>

        {/* Dropdown Cart */}
        {showCart && (
          <div className="absolute top-8 right-0 w-64 bg-white text-black shadow-lg rounded-lg p-4 z-50">
            <h2 className="font-bold text-lg mb-2">Keranjang</h2>
            {cartItems.length > 0 ? (
              <ul className="space-y-2 max-h-60 overflow-y-auto no-scrollbar">
                {cartItems.map((item, idx) => (
                  <li key={idx} className="flex justify-between text-sm">
                    <div className="flex flex-col">
                      <span className="font-bold">{item.title}</span>
                      <span>{item.price}</span>
                    </div>
                    <span>x{item.quantity}</span>
                  </li>
                ))}
              </ul>
            ) : (
              <p className="text-sm text-gray-500">Keranjang kosong</p>
            )}
          </div>
        )}
      </nav>

      {/* Mobile: Cart + Hamburger */}
      <div className="flex items-center gap-4 md:hidden">
        {/* Cart Icon Mobile */}
        <div className="relative">
          <FaCartShopping
            size={24}
            className="hover:text-yellow-500 cursor-pointer"
            onClick={() => setShowCart(!showCart)}
          />
          {cartCount > 0 && (
            <span className="absolute -top-2 -right-2 bg-red-500 text-black text-xs font-bold rounded-full px-2 py-0.5">
              {cartCount}
            </span>
          )}
        </div>

        {/* Hamburger Menu */}
        <button
          className="text-3xl text-white transition-transform duration-200 hover:scale-110"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <MdClose /> : <MdMenu />}
        </button>
      </div>
      {showCart && (
        <div className="absolute top-16 right-4 w-64 bg-white text-black shadow-lg rounded-lg p-4 z-50 md:hidden">
          <h2 className="font-bold text-lg mb-2">Keranjang</h2>
          {cartItems.length > 0 ? (
            <ul className="space-y-2 max-h-60 overflow-y-auto no-scrollbar">
              {cartItems.map((item, idx) => (
                <li key={idx} className="flex justify-between text-sm">
                  <div className="flex flex-col">
                    <span className="font-bold">{item.title}</span>
                    <span>{item.price}</span>
                  </div>
                  <span>x{item.quantity}</span>
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-sm text-gray-500">Keranjang kosong</p>
          )}
        </div>
      )}

      {/* Mobile Menu Overlay */}
      <div
        className={`md:hidden fixed inset-0 z-40 transition-opacity duration-300 ${
          isOpen
            ? "opacity-100 visible bg-black bg-opacity-10"
            : "opacity-10 invisible"
        }`}
        onClick={() => setIsOpen(false)}
      >
        <div
          className={`absolute right-0 top-0 h-full w-64 bg-yellow-800 p-4 transition-transform duration-300 ease-out ${
            isOpen ? "translate-x-0" : "translate-x-full"
          }`}
          onClick={(e) => e.stopPropagation()}
        >
          <div className="mt-16 space-y-4">
            {menuItems.map((item, idx) => (
              <Link
                key={idx}
                to={item.path}
                className={`block py-3 px-4 font-bold rounded-lg transition-colors duration-200 ${
                  pathname === item.path
                    ? "bg-yellow-500 text-white"
                    : "hover:bg-yellow-500 hover:text-white"
                }`}
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
