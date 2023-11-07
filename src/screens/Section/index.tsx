import { FlatList, HStack, Skeleton, Text, VStack, View } from "native-base";
import { StackParamList } from "../../types";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { useFetchSection } from "../../hooks/catalog";
import { useEffect } from "react";
import { ProductCard } from "../../components/ProductCard";

export function Section({
  route,
  navigation,
}: NativeStackScreenProps<StackParamList, "Section">) {
  const { data, isLoading } = useFetchSection(route.params.sectionId);

  useEffect(() => {
    if (!data) return;

    navigation.setOptions({ title: data.title });
  }, [data]);

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
    <FlatList
      data={data?.products}
      renderItem={({ item }) => <ProductCard data={item} />}
      numColumns={2}
      columnWrapperStyle={{
        gap: 10,
        justifyContent: "space-around",
      }}
      contentContainerStyle={{
        gap: 30,
        paddingTop: 20,
        justifyContent: "center",
      }}
    />
  );
}
