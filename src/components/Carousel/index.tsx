import React from "react";
import { FlatList } from "react-native";

const gap = 20;

export interface CarouselProps {
  data: any[];
  renderItem: (data: { index: number; item: any }) => React.ReactElement;
}

export function Carousel({ data, renderItem }: CarouselProps) {
  return (
    <FlatList
      data={data}
      renderItem={renderItem}
      horizontal
      showsHorizontalScrollIndicator={false}
      bounces={false}
      initialNumToRender={5}
      contentContainerStyle={{
        gap,
        paddingVertical: 5,
        paddingHorizontal: 20,
      }}
    />
  );
}
