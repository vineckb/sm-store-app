import { useCart } from "../../hooks/useCart";
import { Product } from "../../types";
import { Button } from "./styles";

export interface AddToCartButtonProps {
  product: Product;
  onPress: () => void;
}

export function AddToCartButton({ product, onPress }: AddToCartButtonProps) {
  return <Button onPress={onPress}>COMPRAR</Button>;
}
