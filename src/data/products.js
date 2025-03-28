import img from '../assets/images/logo.webp';
import vipbronce from '../assets/images/vipbronce.jpg';
import vipplata from '../assets/images/plata.webp';
import viporo from '../assets/images/oro.webp';
import vipplatino from '../assets/images/platino.webp';
import vipdiamante from '../assets/images/diamante.webp';
import vipesmeralda from '../assets/images/esmeralda.webp';

export const products = [
  {
    id: 1,
    name: 'VIP Bronce',
    price: 20000,
    oldPrice: 120000,
    discountUse: false,
    discount: 33,
    image: vipbronce,
    featured: true,
    description:
      'Acceso a beneficios básicos VIP, incluyendo chat exclusivo y recursos especiales.',
    benefits: [
      '20 Millones IC',
      '1 Vehículo Gama Baja',
      'Casa Gama Baja',
      'Rango VIP en Discord',
      'Canal VIP En Discord',
    ],
  },
  {
    id: 2,
    name: 'VIP Plata',
    price: 30000,
    oldPrice: 240000,
    discountUse: false,
    discount: 33,
    image: vipplata,
    featured: true,
    description:
      'Beneficios mejorados con acceso a eventos especiales y contenido premium.',
    benefits: [
      '30 Millones IC',
      '2 Vehículos Gama Baja',
      'Casa Gama Baja',
      'Garaje Gama Baja',
      'Rango VIP En Discord',
      'Canal VIP En Discord',
    ],
  },
  {
    id: 3,
    name: 'VIP Oro',
    price: 40000,
    oldPrice: 360000,
    discountUse: false,
    discount: 33,
    image: viporo,
    featured: true,
    description:
      'Experiencia VIP completa con acceso prioritario y beneficios exclusivos.',
    benefits: [
      '45 Millones IC',
      '2 Vehículos Gama Media',
      'Casa Gama Media',
      'Garaje Gama Media',
      'Rango VIP En Discord',
      'Canal VIP En Discord',
    ],
  },
  {
    id: 4,
    name: 'VIP Platino',
    price: 100000,
    oldPrice: 480000,
    discountUse: false,
    discount: 33,
    image: vipplatino,
    featured: false,
    description:
      'Máximos beneficios VIP con acceso total a contenido exclusivo.',
    benefits: [
      '200 Millones IC',
      '5 Vehículos VIP',
      '1 Vehículo exclusivo',
      '1 Carrito de golf',
      '2 Helicópteros privados',
      '1 Avioneta',
      'Casa VIP',
      'Garaje VIP',
      'Rango VIP En Discord',
      'Canal VIP En Discord',
      '2 Limosinas VIP',
      'Skin HD [3MD] Permanente',
      'Cargamento de 5 AK sin cargadores',
      '10 Chalecos antibalas',
      'Acceso al servidor en mantenimiento',
      'Soporte Y Ayuda Personalizada',
    ],
  },
  {
    id: 5,
    name: 'VIP Diamante',
    price: 55000,
    oldPrice: 120000,
    discountUse: false,
    discount: 33,
    image: vipdiamante,
    featured: false,
    description:
      'Experiencia premium con beneficios únicos y atención personalizada.',
    benefits: [
      '50 Millones IC',
      '1 Vehículo VIP',
      '1 Carrito de golf',
      '1 Helicóptero privado',
      'Casa VIP',
      'Garaje VIP',
      'Rango VIP En Discord',
      'Canal VIP En Discord',
      '1 Limosina VIP',
      'Skin HD [3MD] x1 mes',
      'Soporte Y Ayuda Personalizada',
    ],
  },
  {
    id: 6,
    name: 'VIP Esmeralda',
    price: 70000,
    oldPrice: 720000,
    discountUse: false,
    discount: 33,
    image: vipesmeralda,
    featured: false,
    description:
      'El nivel más alto de membresía con beneficios exclusivos y privilegios especiales.',
    benefits: [
      '150 Millones IC',
      '2 Vehículos VIP',
      '1 Carrito de golf',
      '1 Helicóptero privado',
      '1 Avioneta',
      'Casa VIP',
      'Garaje VIP',
      'Rango VIP En Discord',
      'Canal VIP En Discord',
      '2 Limosinas VIP',
      'Skin HD [3MD] x1 mes',
      'Soporte Y Ayuda Personalizada',
      'Acceso Al Servidor En Mantenimiento',
    ],
  },
];
