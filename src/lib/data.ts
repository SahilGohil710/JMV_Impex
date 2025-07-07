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
    image: '/images/Products/Copper_Pancake_Coil.png',
    material: 'DHP-Cu (deoxidized, high phosphorus copper)',
    dimensions: 'Customizable',
  },
  {
    id: '2',
    name: 'Straight Copper Pipe',
    category: 'Pipes',
    description:
      'High-quality DHP-Cu straight copper pipes, suitable for a variety of applications including plumbing, HVAC, and industrial use. Manufactured to meet rigorous international standards, ensuring reliability and performance.',
    details: [
      'Chemical Composition: Min. 99.9% Cu, P = 0.015 - 0.040%',
      'Standards: ASTM B280, B68, B88, B743, GOST 617-2006, EN 12735-1, 12735-2',
      'Hard-drawn temper for rigidity and strength',
      'Available in various diameters',
    ],
    image: '/images/Products/Copper_Straight_Tube_2.png',
    material: 'DHP-Cu (deoxidized, high phosphorus copper)',
    dimensions: '3.0-6.0m (9.84-19.68 ft) lengths',
  },
  {
    id: '3',
    name: 'Copper Fittings',
    category: 'Fittings',
    description: 'A comprehensive collection of high-quality copper fittings to meet all your plumbing and HVAC needs. Our range includes various elbows, couplings, tees, and connection tubes, all engineered for durability and a perfect fit. Our fittings are manufactured to the highest standards, ensuring leak-proof connections and long-lasting performance in any application.',
    details: [
      { name: '45° Elbow', image: '/images/CopperFittings/45_Elbow.png' },
      { name: '90° Elbow', image: '/images/CopperFittings/90_Elbow.png' },
      { name: '90° Elbow Long Radius', image: '/images/CopperFittings/90_Elbow_Long_Radius.png' },
      { name: 'Coupling', image: '/images/CopperFittings/Coupling.png' },
      { name: 'Reducing Coupling', image: '/images/CopperFittings/Reducing_Coupling.png' },
      { name: 'Tee', image: '/images/CopperFittings/Tee.png' },
      
    ],
    image: '/images/Products/Copper_Fittings.png',
    material: 'Copper Alloy',
    dimensions: 'Various sizes available',
  },
];
