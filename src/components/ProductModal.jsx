import { XMarkIcon } from '@heroicons/react/24/outline';

export default function ProductModal({ product, onClose }) {
  if (!product) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      <div
        className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm"
        onClick={onClose}
      ></div>
      <div className="relative min-h-screen flex items-center justify-center p-4">
        <div className="relative bg-[#1a2533] rounded-lg w-full max-w-2xl mx-auto">
          <div className="p-6">
            <div className="flex justify-between items-start mb-6">
              <h2 className="text-2xl md:text-3xl font-bold text-white pr-8">
                {product.name}
              </h2>
              <button
                onClick={onClose}
                className="text-gray-400 hover:text-white transition-colors"
              >
                <XMarkIcon className="h-6 w-6" />
              </button>
            </div>

            <div className="mb-8">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-64 object-cover rounded-lg"
              />
            </div>

            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <span className="text-gray-400 line-through text-lg">
                  COP$ {product.oldPrice.toLocaleString()}
                </span>
                <span className="bg-[#3394ed] text-white px-3 py-1 rounded-full text-sm">
                  {product.discount}% OFF
                </span>
              </div>

              <div className="text-[#3394ed] text-3xl md:text-4xl font-bold">
                COP$ {product.price.toLocaleString()}
              </div>

              <div className="text-gray-300">
                <h3 className="text-xl font-semibold mb-3">Descripción</h3>
                <p className="text-base leading-relaxed">
                  {product.description}
                </p>
              </div>

              <div className="text-gray-300">
                <h3 className="text-xl font-semibold mb-3">Beneficios</h3>
                <ul className="list-disc list-inside space-y-2">
                  {product.benefits.map((benefit, index) => (
                    <li key={index}>{benefit}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
