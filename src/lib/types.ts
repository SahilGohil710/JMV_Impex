export interface Product {
  id: string;
  name: string;
  category: 'Coils' | 'Pipes' | 'Fittings';
  price: number;
  description: string;
  details: string[];
  image: string;
  material: string;
  dimensions: string;
}
