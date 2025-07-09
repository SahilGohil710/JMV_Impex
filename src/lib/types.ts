export interface SpecChartRow {
  od_mm: string;
  od_in: string;
  values: boolean[];
}

export interface SpecChart {
  headers: string[];
  rows: SpecChartRow[];
}

export interface Product {
  id: string;
  name: string;
  category: 'Coils' | 'Pipes' | 'Fittings';
  description: string;
  details: string[] | { name: string; image: string }[];
  image: string;
  material: string;
  dimensions: string;
  specChart?: SpecChart;
}
