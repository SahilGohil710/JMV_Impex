import type { Product } from './types';

export const products: Product[] = [
  {
    id: '1',
    name: 'Pancake Coil',
    category: 'Coils',
    description:
      'High-quality DHP-Cu (deoxidized, high phosphorus copper) pancake coils, ideal for refrigeration, air conditioning, and heat exchange applications. Conforms to multiple international standards.',
    details: [
      'Chemical Composition: Min. 99.9% Cu, P = 0.015 - 0.040%',
      'Available Length: 15-50m (49.21-164.04 ft)',
      'Standards: ASTM B280, B68, B88, B743, GOST 617-2006, EN 12735-1, 12735-2',
      'Soft-annealed for easy bending and flaring',
    ],
    image: 'https://placehold.co/600x400.png',
    material: 'DHP-Cu (deoxidized, high phosphorus copper)',
    dimensions: 'Customizable',
  },
  {
    id: '2',
    name: 'Straight Copper Pipe',
    category: 'Pipes',
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
