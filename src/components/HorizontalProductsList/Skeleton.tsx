import { VStack, HStack, Skeleton } from "native-base";

export function HorizontalProductsListSkeleton() {
  return (
    <VStack my={5}>
      <Skeleton.Text width={120} lines={1} mx={5} mb={5} />

      <HStack space={5} px={5}>
        {Array.from({ length: 3 }).map((_, index) => (
          <VStack key={index}>
            <Skeleton w={150} h={150} borderRadius={4} mb={5} />
            <Skeleton.Text width={130} lines={2} mb={5} />
            <Skeleton width={130} height={35} />
          </VStack>
        ))}
      </HStack>
    </VStack>
  );
}
