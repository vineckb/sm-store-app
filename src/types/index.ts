export interface Offer {
  id: number;
  title: string;
  products: Product[];
}
export interface Product {
  id: number;
  title: string;
  price: number;
  promotionalPrice: number;
  imageUrl: string;
}

export interface Section {
  title: string;
  id: number | string;
  products: Product[];
}
