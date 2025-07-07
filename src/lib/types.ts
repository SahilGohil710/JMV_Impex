export interface Product {
  id: string;
  name: string;
  category: 'Coils' | 'Pipes' | 'Fittings';
  description: string;
  details: string[] | { name: string; image: string }[];
  image: string;
  material: string;
  dimensions: string;
}
