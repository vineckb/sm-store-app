import React, { useCallback } from "react";
import { FlatList, StyleSheet } from "react-native";

const gap = 20;

export interface CarouselProps {
  data: T[];
  renderItem: (data: { index: number; item: T }) => React.ReactElement;
}

export function Carousel({ data, renderItem }: CarouselProps) {
  return (
    <FlatList
      data={data}
      renderItem={renderItem}
      horizontal
      showsHorizontalScrollIndicator={false}
      bounces={false}
      contentContainerStyle={{
        gap,
        paddingVertical: 5,
        paddingHorizontal: 20,
      }}
    />
  );
}
