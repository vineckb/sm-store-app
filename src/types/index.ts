export type ID = string | number;

export interface CartProduct {
  price: number;
  quantity: number;
}

export interface CartResource {
  id: ID;
  products: {
    [key: ID]: CartProduct;
  };
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

export type StackParamList = {
  Catalog: undefined;
  Section: { sectionId: string };
  Search: undefined;
  Cart: undefined;
  SignIn: undefined;
};
