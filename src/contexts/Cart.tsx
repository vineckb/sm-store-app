import { createContext } from "react";
import { CartProduct, ID, Product } from "../types";

interface CartContextType {
  totalPrice: number;

  isLoading: boolean;
  setLoading: (isLoading: boolean) => void;

  isFetching: boolean;
  setFetching: (isFetching: boolean) => void;

  isSubmiting: boolean;
  setSubmiting: (isSubmiting: boolean) => void;

  orderId?: ID;
  setOrderId: (orderId: ID) => void;

  products: CartProduct[];
  add: (product: Product) => void;
  updateQuantity: (productId: ID, quantity: number) => void;
  remove: (productId: ID) => void;
}

export const CartContext = createContext<CartContextType>(
  {} as CartContextType
);
