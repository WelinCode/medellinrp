import {
  ShoppingCartIcon,
  InformationCircleIcon,
} from '@heroicons/react/24/outline';
import { useCart } from '../context/CartContext';

const ProductCard = ({ product, onShowDetails }) => {
  const { addToCart } = useCart();

  return (
    <div className="bg-[#1a2533] rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 w-full max-w-sm mx-auto">
      <div className="relative">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-48 object-cover"
        />
      </div>

      <div className="p-6">
        <h3 className="text-2xl font-bold text-white mb-2">{product.name}</h3>
        <p className="text-gray-400 text-sm mb-4 line-clamp-2">
          {product.description}
        </p>

        {product.discountUse ? (
          <div className="flex items-center gap-2 mb-4">
            <span className="text-gray-400 line-through text-sm">
              COP$ {product.oldPrice.toFixed(2)}
            </span>
            <span className="bg-[#3394ed] text-white text-xs px-2 py-1 rounded">
              {product.discount}% OFF
            </span>
          </div>
        ) : null}

        <div className="flex items-center justify-between">
          <span className="text-[#3394ed] text-2xl font-bold">
            COP$ {product.price.toFixed(2)}
          </span>
          <div className="flex gap-2">
            <button
              onClick={() => onShowDetails(product)}
              className="bg-[#1e2a3b] text-white p-2 rounded-full hover:bg-[#2a3a4f] transition-colors"
              title="Ver detalles"
            >
              <InformationCircleIcon className="h-6 w-6" />
            </button>
            <button
              onClick={() => addToCart(product)}
              className="bg-[#3394ed] text-white p-2 rounded-full hover:bg-[#2084e3] transition-colors"
              title="Añadir al carrito"
            >
              <ShoppingCartIcon className="h-6 w-6" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
