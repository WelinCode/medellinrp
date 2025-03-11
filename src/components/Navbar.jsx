import { Link } from 'react-router-dom';
import {
  ShoppingBagIcon,
  Bars3Icon,
  XMarkIcon,
} from '@heroicons/react/24/outline';
import { useCart } from '../context/CartContext';
import { useState } from 'react';

export default function Navbar() {
  const { setIsCartOpen, getCartItemsCount } = useCart();
  const itemsCount = getCartItemsCount();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="py-4 relative">
      <div className="max-w-7xl container mx-auto px-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="text-xl md:text-2xl font-bold">
            <span className="text-white">Medellin</span>
            <span className="text-[#3394ed]">Roleplay</span>
          </Link>

          {/* Mobile menu button */}
          <button
            className="md:hidden text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <XMarkIcon className="h-6 w-6" />
            ) : (
              <Bars3Icon className="h-6 w-6" />
            )}
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex gap-6">
            <Link
              to="/"
              className="text-white hover:text-[#3394ed] font-bold text-[19px]"
            >
              Inicio
            </Link>
            <Link
              to="/productos"
              className="text-white hover:text-[#3394ed] font-bold text-[19px]"
            >
              Tienda
            </Link>
          </div>

          <button
            onClick={() => setIsCartOpen(true)}
            className="bg-[#3394ed] text-white px-4 py-2 rounded-full hover:bg-[#1e6bb8] flex items-center gap-2"
          >
            <ShoppingBagIcon className="h-6 w-6" />
            {itemsCount > 0 && (
              <span className="bg-white text-[#3394ed] text-sm rounded-full w-5 h-5 flex items-center justify-center">
                {itemsCount}
              </span>
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-dark border-t border-gray-700 py-4">
            <div className="flex flex-col items-center gap-4">
              <Link
                to="/"
                className="text-white hover:text-[#3394ed] font-bold text-[19px]"
                onClick={() => setIsMenuOpen(false)}
              >
                Inicio
              </Link>
              <Link
                to="/productos"
                className="text-white hover:text-[#3394ed] font-bold text-[19px]"
                onClick={() => setIsMenuOpen(false)}
              >
                Tienda
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
