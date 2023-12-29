import { useFetchOffers } from "../../hooks/catalog";

import { HStack, Skeleton, VStack } from "native-base";
import { HorizontalProductsList } from "../../components/HorizontalProductsList";

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

  if (!data) return null;
  return <HorizontalProductsList title="Ofertas do dia" data={data} />;
}
