import { createContext } from "react";
import { CartProduct, ID } from "../types";

interface CartContextType {
  totalPrice: string;

  isLoading: boolean;
  setLoading: (isLoading: boolean) => void;

  isFetching: boolean;
  setFetching: (isFetching: boolean) => void;

  isSubmiting: boolean;
  setSubmiting: (isSubmiting: boolean) => void;

  orderId?: ID;
  setOrderId: (orderId: ID) => void;

  products: { [key: ID]: CartProduct };
  add: (productId: ID, price: number) => void;
  updateQuantity: (productId: ID, quantity: number) => void;
  remove: (productId: ID) => void;
}

export const CartContext = createContext<CartContextType>(
  {} as CartContextType
);
