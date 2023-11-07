export type ID = string | number;

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
  id: ID;
  products: Product[];
}

export interface OrderProduct {
  id?: ID;
  productId: ID;
  price: number;
  quantity: number;
  title: string;
  imageUrl: string;
}

export interface Order {
  id: ID;
  products: OrderProduct[];
}

export type StackParamList = {
  Catalog: undefined;
  Section: { sectionId: string };
  Search: undefined;
  Cart: undefined;
  SignIn: undefined;
};
