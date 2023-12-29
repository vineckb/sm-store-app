import { AddToCartButton } from "../AddToCartButton";
import { QuantityHandler } from "../QuantityHandler";
import { CartProduct } from "../../types";

export interface CartActionsProps {
  product: CartProduct;
}

export function CartActions({ product }: CartActionsProps) {
  if (!product.quantity) return <AddToCartButton product={product} />;

  return <QuantityHandler productId={product.id} quantity={product.quantity} />;
}
