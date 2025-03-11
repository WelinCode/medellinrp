import { useCart } from '../context/CartContext';

const memberships = [
  {
    id: 'bronze',
    name: 'Servicio Bronce',
    price: 20000,
    currency: 'COP',
    benefits: [
      'Rango VIP en discord',
      'Canal VIP en discord',
      '20 Millones IC',
      '1 Vehiculo gama baja',
      'Casa gama baja',
    ],
  },
  {
    id: 'oro',
    name: 'Servicio Oro',
    price: 40000,
    currency: 'COP',
    benefits: [
      'Rango VIP en discord',
      'Canal VIP en discord',
      '45 Millones IC',
      '2 Vehiculos gama media',
      'Casa gama media',
      'Garage gama media',
    ],
  },
  {
    id: 'plata',
    name: 'Servicio Plata',
    price: 30000,
    currency: 'COP',
    benefits: [
      'Rango VIP en discord',
      'Canal VIP en discord',
      '30 Millones IC',
      '2 Vehiculos gama baja',
      'Casa gama baja',
      'Garage gama baja',
    ],
  },
];

export default function MembershipCards() {
  const { addToCart } = useCart();

  const handleAddToCart = (membership) => {
    const product = {
      id: membership.id,
      name: membership.name,
      price: membership.price,
      oldPrice: membership.price * 1.3,
      discount: 30,
      image: `https://i.imgur.com/${membership.id}.png`,
      description: `Membresía ${membership.name} con beneficios exclusivos`,
    };
    addToCart(product);
  };

  return (
    <div className="py-16 bg-dark">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-white mb-4">
          MEMBRESÍAS A TU ALCANCE
        </h2>
        <p className="text-center text-gray-400 mb-12">
          ¿Que estas esperando? No lo pienses y consigue la tuya.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {memberships.map((membership) => (
            <div
              key={membership.id}
              className={`bg-[#1a2533] rounded-lg p-8 flex flex-col ${
                membership.id === 'oro' ? 'transform scale-105' : ''
              }`}
            >
              <h3 className="text-2xl font-bold text-[#3394ed] mb-6">
                {membership.name}
              </h3>
              <div className="text-4xl font-bold text-white mb-4 flex items-end">
                <span className="text-2xl mr-1">$</span>
                {membership.price.toLocaleString()}
                <span className="text-lg text-gray-400 ml-1">/ mes</span>
              </div>
              <ul className="flex-grow space-y-4 mb-8">
                {membership.benefits.map((benefit, index) => (
                  <li key={index} className="flex items-center text-white">
                    <svg
                      className="w-5 h-5 text-[#3394ed] mr-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    {benefit}
                  </li>
                ))}
              </ul>
              <button
                onClick={() => handleAddToCart(membership)}
                className="w-full bg-[#3394ed] text-white py-3 rounded-lg hover:bg-[#2084e3] transition-colors"
              >
                Agregar al Carrito
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
