import { Text, VStack } from "native-base";
import { Carousel } from "../Carousel";
import { CartProduct, Product } from "../../types";
import { ProductCard } from "../ProductCard";
import { HorizontalProductsListSkeleton } from "./Skeleton";
import React from "react";
import { useCart } from "../../hooks/useCart";

export interface HorizontalProductsListProps {
  data: Product[];
  title: string;
  isLoading?: boolean;
}

export function HorizontalProductsList({
  title,
  data,
  isLoading = false,
}: HorizontalProductsListProps) {
  const { products } = useCart();
  const list: CartProduct[] = React.useMemo(() => {
    console.log("calculating");
    return data.map((product) => ({
      ...product,
      quantity: products.find((p) => p.id === product.id)?.quantity || 0,
    }));
  }, [data, products]);

  console.log(products.map((p) => `${p.id} - ${p.quantity}`));

  if (isLoading) return <HorizontalProductsListSkeleton />;

  return (
    <VStack my={5}>
      <Text fontSize={16} px={5}>
        {title}
      </Text>
      <Carousel
        data={list}
        renderItem={({ item: product, index }) => (
          <ProductCard key={`product-${index}`} data={product} />
        )}
      />
    </VStack>
  );
}
