import { useCart } from "../../hooks/useCart";
import { Product } from "../../types";
import { Button } from "./styles";

export interface AddToCartButtonProps {
  product: Product;
}

export function AddToCartButton({ product }: AddToCartButtonProps) {
  const { add } = useCart();

  function handlePress() {
    add(product.id, product.promotionalPrice || product.price);
  }

  return <Button onPress={handlePress}>Comprar</Button>;
}
