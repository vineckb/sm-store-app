import { createContext } from "react";
import { ID, OrderProduct } from "../types";

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

  products: { [key: ID]: OrderProduct };
  add: (
    product: Omit<OrderProduct, "quantity"> & { promotionalPrice?: number },
    quantity?: number
  ) => void;
  updateQuantity: (id: ID, quantity: number) => void;
  remove: (id: ID) => void;
}

export const CartContext = createContext<CartContextType>(
  {} as CartContextType
);
