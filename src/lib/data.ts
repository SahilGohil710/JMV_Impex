import type { Product, SoftTubeSpecChart, StraightPipeSpecChart } from './types';

export const softTubeSpecChartData: SoftTubeSpecChart = {
  title: 'SOFT COPPER TUBES SIZE CHART',
  headers: ['Outside Diameter (mm)', 'Outside Diameter (inch)', 'Wall Thickness (mm)', 'Wall Thickness (inch)', 'Length (Meter)'],
  rows: [
    { od_mm: '6.35', od_in: '1/4', wall_mm: '0.8', wall_in: '0.032', length_m: '15' },
    { od_mm: '9.52', od_in: '3/8', wall_mm: '0.8', wall_in: '0.032', length_m: '15' },
    { od_mm: '12.7', od_in: '1/2', wall_mm: '0.9', wall_in: '0.035', length_m: '15' },
    { od_mm: '15.88', od_in: '5/8', wall_mm: '1', wall_in: '0.040', length_m: '15' },
    { od_mm: '19.05', od_in: '3/4', wall_mm: '1', wall_in: '0.040', length_m: '15' },
    { od_mm: '22.23', od_in: '7/8', wall_mm: '1.2', wall_in: '0.047', length_m: '15' },
  ]
};


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
    specChart: {
      headers: ['0.30', '0.35', '0.41', '0.45', '0.46', '0.51', '0.56', '0.61', '0.66', '0.71', '0.76', '0.81', '0.91', '1.00', '1.20', '1.50'],
      rows: [
        { od_mm: '4.76', od_in: '3/16"', values: [false, false, true, true, true, true, true, true, true, true, true, true, false, false, false, false] },
        { od_mm: '6.35', od_in: '1/4"', values: [true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, false] },
        { od_mm: '7.94', od_in: '5/16"', values: [true, true, true, true, true, true, true, true, true, true, true, true, true, true, false, false] },
        { od_mm: '9.52', od_in: '3/8"', values: [true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, false] },
        { od_mm: '12.70', od_in: '1/2"', values: [false, false, false, true, true, true, true, true, true, true, true, true, true, true, true, false] },
        { od_mm: '15.88', od_in: '5/8"', values: [false, false, false, false, true, true, true, true, true, true, true, true, true, true, true, false] },
        { od_mm: '19.05', od_in: '3/4"', values: [false, false, false, false, false, false, false, false, false, true, true, true, true, true, true, true] },
        { od_mm: '22.22', od_in: '7/8"', values: [false, false, false, false, false, false, false, false, false, false, true, true, true, true, true, true] },
      ],
    },
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
    softTubeSpecChart: softTubeSpecChartData,
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
