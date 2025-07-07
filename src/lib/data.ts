import type { Product } from './types';

export const products: Product[] = [
  {
    id: '1',
    name: 'Pancake Coil',
    category: 'Coils',
    price: 150.0,
    description:
      'High-quality pancake coils made from pure copper, ideal for refrigeration, air conditioning, and heat exchange applications. Our coils are precision-wound for optimal performance and durability.',
    details: [
      'Made from 99.9% pure copper',
      'Seamless construction for leak-free performance',
      'Available in various diameters and lengths',
      'Soft-annealed for easy bending and flaring',
    ],
    image: 'https://placehold.co/600x400.png',
    material: 'Pure Copper',
    dimensions: 'Customizable',
  },
  {
    id: '2',
    name: 'Straight Copper Pipe',
    category: 'Pipes',
    price: 80.0,
    description:
      'Durable and reliable straight copper pipes for plumbing, HVAC, and medical gas systems. Manufactured to strict quality standards for consistent wall thickness and temper.',
    details: [
      'Meets ASTM B88 standards',
      'Hard-drawn temper for rigidity',
      'Resistant to corrosion and scaling',
      'Suitable for both residential and commercial use',
    ],
    image: 'https://placehold.co/600x400.png',
    material: 'Pure Copper',
    dimensions: 'Standard lengths and diameters available',
  },
  {
    id: '3',
    name: 'Copper Fittings',
    category: 'Fittings',
    price: 25.0,
    description:
      'A wide range of precision-engineered copper fittings, including elbows, tees, and couplings. Designed for secure, long-lasting connections in any copper tubing system.',
    details: [
      'Wrot copper construction',
      'Pressure and temperature rated',
      'Compatible with all standard copper pipes',
      'Ensures a tight, solder-free seal',
    ],
    image: 'https://placehold.co/600x400.png',
    material: 'Copper Alloy',
    dimensions: 'Various sizes available',
  },
];
