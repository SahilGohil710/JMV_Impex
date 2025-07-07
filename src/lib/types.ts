export interface Product {
  id: string;
  name: string;
  category: 'Kitchenware' | 'Decor' | 'Jewelry' | 'Utensils';
  price: number;
  description: string;
  details: string[];
  image: string;
  material: string;
  dimensions: string;
}
