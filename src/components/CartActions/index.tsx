import { AddToCartButton } from "../AddToCartButton";
import { QuantityHandler } from "../QuantityHandler";
import { CartProduct } from "../../types";
import React from "react";
import { useCart } from "../../hooks/useCart";

export interface CartActionsProps {
  product: CartProduct;
}

export function CartActions({ product }: CartActionsProps) {
  const { add, updateQuantity, products } = useCart();
  const quantity = products[product.id]?.quantity || 0;
  const [innerQuantity, setInnerQuantity] = React.useState<number>(quantity);

  function onAdd() {
    setInnerQuantity(1);
    setTimeout(() => add(product), 500);
  }

  function onUpdate(quantity: number) {
    setInnerQuantity(quantity);
    setTimeout(() => (product.id, quantity), 500);
  }

  if (!innerQuantity)
    return <AddToCartButton product={product} onPress={onAdd} />;

  return (
    <QuantityHandler
      productId={product.id}
      quantity={innerQuantity}
      onUpdate={onUpdate}
    />
  );
}
