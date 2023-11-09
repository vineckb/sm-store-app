import { useFetchOffers } from "../../hooks/catalog";

import { Product } from "../../types";
import { HorizontalProductsList } from "../../components/HorizontalProductsList";
import { FlatList, HStack, Skeleton, VStack } from "native-base";
import { ProductCard } from "../../components/ProductCard";

const renderItem = ({ item }: { item: Product }) => <ProductCard data={item} />;
const keyExtractor = (_: any, index: number) => "product-" + index;

const getItemLayout = (_: any, index: number) => ({
  length: 160,
  offset: 160 * Math.ceil(index / 2),
  index,
});

export function OffersList() {
  const { data, isLoading } = useFetchOffers();

  if (isLoading) {
    return (
      <HStack py={10} justifyContent="space-around" flexWrap="wrap">
        {Array.from({ length: 8 }).map((_, index) => (
          <VStack key={index} w={150} mb={10}>
            <Skeleton w={150} h={150} borderRadius={4} mb={5} />
            <Skeleton.Text width={130} lines={2} mb={5} />
            <Skeleton width={130} height={35} />
          </VStack>
        ))}
      </HStack>
    );
  }

  return (
    data && (
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={keyExtractor}
        numColumns={2}
        columnWrapperStyle={{
          gap: 10,
          justifyContent: "space-around",
        }}
        contentContainerStyle={{
          gap: 30,
          paddingTop: 20,
          justifyContent: "center",
          paddingBottom: 100,
        }}
        maxToRenderPerBatch={6}
        getItemLayout={getItemLayout}
      />
    )
  );
}
