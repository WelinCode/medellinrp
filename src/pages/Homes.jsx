import { useState } from 'react';
import Hero from '../components/Hero';
import Stats from '../components/Stats';
import ProductCard from '../components/ProductCard';
import ProductModal from '../components/ProductModal';
import MembershipCards from '../components/MembershipCards';
import { products } from '../data/products';
import { Link } from 'react-router-dom';

export default function Home() {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const featuredProducts = products.filter((product) => product.featured);

  return (
    <div>
      <Hero />
      {/* <MembershipCards /> */}
      <div className="bg-dark py-16">
        <div className="container mx-auto px-4 max-w-7xl">
          <h2 className="text-3xl md:text-4xl text-white font-bold text-center mb-8 md:mb-12">
            Productos más recomendados por nuestros clientes
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
            {featuredProducts.map((product) => (
              <div key={product.id} className="flex justify-center">
                <ProductCard
                  product={product}
                  onShowDetails={setSelectedProduct}
                />
              </div>
            ))}
          </div>
        </div>

        <Link to="/productos">
          <button className="block mx-auto mt-8 bg-[#3394ed] text-white px-6 py-3 rounded-full text-lg font-semibold hover:bg-[#1e6bb8] transition-all duration-300 w-full sm:w-auto sm:min-w-[200px] max-w-xs">
            Ver Más...
          </button>
        </Link>
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
