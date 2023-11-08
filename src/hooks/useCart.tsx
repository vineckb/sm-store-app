import { CartContext } from "../contexts/Cart";
import { useContext } from "react";

export function useCart() {
  const context = useContext(CartContext);
  return context;
}
