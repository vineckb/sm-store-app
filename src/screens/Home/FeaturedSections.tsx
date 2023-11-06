import { useFetchFeaturedSections } from "../../hooks/catalog";
import { Product } from "../../types";
import { HorizontalProductsList } from "../../components/HorizontalProductsList";
import { HorizontalProductsListSkeleton } from "../../components/HorizontalProductsList/Skeleton";
import { FlatList } from "native-base";

export function FeaturedSections() {
  const { data, isLoading } = useFetchFeaturedSections();

  if (isLoading) {
    return (
      <>
        <HorizontalProductsListSkeleton />
        <HorizontalProductsListSkeleton />
      </>
    );
  }

  return (
    <FlatList
      data={data}
      renderItem={({ item }) => (
        <HorizontalProductsList
          key={`section-${item.id}`}
          title={item.title}
          data={item.products as Product[]}
        />
      )}
    />
  );
}
