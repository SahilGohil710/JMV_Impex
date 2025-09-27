import type { Product, SoftTubeSpecChart, HardPipeSpecChart } from './types';

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

const hardPipeWeightMeter: HardPipeSpecChart = {
    title: 'WEIGHT OF COPPER HARD PIPE IN METER',
    headers: ['Inch', 'MM', '16SWG (1.6MM)', '18SWG (1.2MM)', '19SWG (1.02MM)', '20SWG (0.9MM)', '21SWG (0.8MM)'],
    rows: [
        { inch: '1/4', mm: '6.35', values: ['0.214', '0.175', '0.151', '0.139', '0.126'] },
        { inch: '5/16', mm: '7.94', values: ['0.286', '0.229', '0.198', '0.182', '0.166'] },
        { inch: '3/8', mm: '9.52', values: ['0.358', '0.283', '0.241', '0.22', '0.198'] },
        { inch: '1/2', mm: '12.7', values: ['0.501', '0.391', '0.332', '0.302', '0.272'] },
        { inch: '5/8', mm: '15.88', values: ['0.648', '0.499', '0.421', '0.382', '0.342'] },
        { inch: '3/4', mm: '19.05', values: ['0.79', '0.607', '0.507', '0.46', '0.415'] },
        { inch: '7/8', mm: '22.23', values: ['0.935', '0.715', '0.601', '0.544', '0.486'] },
        { inch: '1', mm: '25.4', values: ['1.079', '0.823', '0.689', '0.624', '0.56'] },
        { inch: '1 1/8', mm: '28.58', values: ['1.223', '0.931', '0.781', '0.706', '0.63'] },
        { inch: '1 1/4', mm: '31.75', values: ['1.367', '1.039', '0.871', '0.785', '-'] },
        { inch: '1 3/8', mm: '34.93', values: ['1.511', '1.147', '0.961', '0.869', '-'] },
        { inch: '1 1/2', mm: '38.1', values: ['1.655', '1.255', '1.051', '0.95', '-'] },
        { inch: '1 5/8', mm: '41.28', values: ['1.799', '1.363', '1.142', '1.03', '-'] },
        { inch: '1 3/4', mm: '44.45', values: ['1.943', '1.471', '1.232', '1.11', '-'] },
        { inch: '2 1/8', mm: '53.98', values: ['2.375', '1.795', '1.502', '1.354', '-'] }
    ]
};

const hardPipeWeightFeet: HardPipeSpecChart = {
    title: 'WEIGHT OF COPPER HARD PIPE IN FEET',
    headers: ['Inch', 'MM', '16SWG (1.6MM)', '18SWG (1.2MM)', '19SWG (1.02MM)', '20SWG (0.9MM)', '21SWG (0.8MM)'],
    rows: [
        { inch: '1/4', mm: '6.35', values: ['0.065', '0.053', '0.046', '0.042', '0.038'] },
        { inch: '5/16', mm: '7.94', values: ['0.087', '0.07', '0.06', '0.055', '0.049'] },
        { inch: '3/8', mm: '9.52', values: ['0.109', '0.086', '0.073', '0.067', '0.06'] },
        { inch: '1/2', mm: '12.7', values: ['0.153', '0.119', '0.101', '0.092', '0.083'] },
        { inch: '5/8', mm: '15.88', values: ['0.198', '0.152', '0.128', '0.116', '0.104'] },
        { inch: '3/4', mm: '19.05', values: ['0.241', '0.185', '0.154', '0.14', '0.126'] },
        { inch: '7/8', mm: '22.23', values: ['0.285', '0.218', '0.183', '0.166', '0.148'] },
        { inch: '1', mm: '25.4', values: ['0.329', '0.251', '0.211', '0.19', '0.171'] },
        { inch: '1 1/8', mm: '28.58', values: ['0.373', '0.284', '0.238', '0.215', '0.192'] },
        { inch: '1 1/4', mm: '31.75', values: ['0.417', '0.317', '0.266', '0.239', '-'] },
        { inch: '1 3/8', mm: '34.93', values: ['0.461', '0.35', '0.293', '0.263', '-'] },
        { inch: '1 1/2', mm: '38.1', values: ['0.505', '0.383', '0.32', '0.288', '-'] },
        { inch: '1 5/8', mm: '41.28', values: ['0.548', '0.416', '0.348', '0.312', '-'] },
        { inch: '1 3/4', mm: '44.45', values: ['0.592', '0.448', '0.375', '0.336', '-'] },
        { inch: '2 1/8', mm: '53.98', values: ['0.724', '0.547', '0.458', '0.413', '-'] }
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
    hardPipeWeightMeter: hardPipeWeightMeter,
    hardPipeWeightFeet: hardPipeWeightFeet,
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
