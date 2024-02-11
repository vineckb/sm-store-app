import { Product } from ".";
import { ID } from "./global";

export interface CartProductEntry {
  quantity: number;
  promotionalPrice?: number;
  price: number;
}

export interface CartProductsList {
  [key: string]: CartProductEntry;
}

export interface CartContextType {
  totalPrice: number;

  isLoading: boolean;
  setLoading: (isLoading: boolean) => void;

  isFetching: boolean;
  setFetching: (isFetching: boolean) => void;

  isSubmiting: boolean;
  setSubmiting: (isSubmiting: boolean) => void;

  orderId?: ID;
  setOrderId: (orderId: ID) => void;

  products: CartProductsList;
  add: (product: Product) => void;
  updateQuantity: (productId: ID, quantity: number) => void;
  remove: (productId: ID) => void;
}
