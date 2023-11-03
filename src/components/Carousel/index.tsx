import React, { useCallback, memo, useRef, useState } from "react";
import {
  FlatList,
  View,
  Dimensions,
  Text,
  StyleSheet,
  Image,
} from "react-native";

const gap = 20;
const containerWidth = 150;

const styles = StyleSheet.create({
  carousel: { flex: 1 },
});

export interface CarouselProps<T extends any> {
  data: T[];
  renderItem: (data: { index: number; item: T }) => React.ReactElement;
}

export function Carousel<T>({ data, renderItem }: CarouselProps<T>) {
  const flatListOptimizationProps = {
    initialNumToRender: 0,
    maxToRenderPerBatch: 2,
    removeClippedSubviews: true,
    scrollEventThrottle: 16,
    windowSize: 2,
    getItemLayout: useCallback(
      (_: any, index: number) => ({
        index,
        length: containerWidth + gap,
        offset: index * containerWidth + gap,
      }),
      []
    ),
  };

  return (
    <FlatList
      data={data}
      style={styles.carousel}
      renderItem={renderItem}
      horizontal
      showsHorizontalScrollIndicator={false}
      bounces={false}
      contentContainerStyle={{
        gap,
        paddingVertical: 5,
      }}
      {...flatListOptimizationProps}
    />
  );
}
