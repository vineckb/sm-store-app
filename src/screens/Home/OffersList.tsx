import { FlatList } from "react-native";
import { ProductCard } from "../../components/ProductCard";
import { useFetchOffers } from "../../hooks/catalog";
import { Text, View } from "native-base";

import { Product } from "../../types";
import { Carousel } from "../../components/Carousel";

export function OffersList() {
  const { data, isLoading, isFetching } = useFetchOffers();

  if (isLoading) return <Text>Carregando...</Text>;
  if (isFetching) return <Text>Atualizando...</Text>;

  return (
    <FlatList
      data={data}
      renderItem={({ item: offer, index }) => (
        <View
          key={index}
          style={{
            margin: 10,
          }}
        >
          <Text fontSize={16}>{offer.title}</Text>
          <Carousel
            data={offer.products}
            key={index}
            renderItem={({
              item: product,
              index,
            }: {
              item: Product;
              index: number;
            }) => (
              <ProductCard
                key={`product-${index}`}
                data={product}
                index={index}
              />
            )}
          />
        </View>
      )}
    />
  );
}
