import { useState } from 'react';
import ProductCard from '../components/ProductCard';
import { products } from '../data/products';
import ProductModal from '../components/ProductModal';

export default function Products() {
  const [selectedProduct, setSelectedProduct] = useState(null);

  return (
    <div className="bg-dark max-w-7xl mx-auto min-h-screen py-8 md:py-16">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl md:text-4xl text-white font-bold text-center mb-8 md:mb-12">
          Todos los Productos
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
          {products.map((product) => (
            <div key={product.id} className="flex justify-center">
              <ProductCard
                product={product}
                onShowDetails={setSelectedProduct}
              />
            </div>
          ))}
        </div>
      </div>
      {selectedProduct && (
        <ProductModal
          product={selectedProduct}
          onClose={() => setSelectedProduct(null)}
        />
      )}
    </div>
  );
}
