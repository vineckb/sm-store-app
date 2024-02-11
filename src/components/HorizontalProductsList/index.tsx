import { Text, VStack } from "native-base";
import { Carousel } from "../Carousel";
import { Product } from "../../types";
import { ProductCard } from "../ProductCard";
import { HorizontalProductsListSkeleton } from "./Skeleton";
import React from "react";

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
  if (isLoading) return <HorizontalProductsListSkeleton />;

  return (
    <VStack my={5}>
      <Text fontSize={16} px={5}>
        {title}
      </Text>
      <Carousel
        data={data}
        renderItem={({ item: product, index }) => (
          <ProductCard key={`product-${index}`} data={product} />
        )}
      />
    </VStack>
  );
}
