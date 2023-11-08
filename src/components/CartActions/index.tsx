import { useState } from "react";
import { AddToCartButton } from "../AddToCartButton";
import { QuantityHandler } from "../QuantityHandler";
import { ID, Product } from "../../types";
import { useCart } from "../../hooks/useCart";

export interface CartActionsProps {
  product: Product;
}

export function CartActions({ product }: CartActionsProps) {
  const { products } = useCart();

  const quantity = products[product.id]?.quantity || 0;

  if (!quantity) return <AddToCartButton product={product} />;

  return <QuantityHandler productId={product.id} quantity={quantity} />;
}
