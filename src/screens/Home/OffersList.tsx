import { useFetchOffers } from "../../hooks/catalog";

import { Product } from "../../types";
import { HorizontalProductsList } from "../../components/HorizontalProductsList";

export function OffersList() {
  const { data, isLoading } = useFetchOffers();

  return (
    <HorizontalProductsList
      isLoading={isLoading}
      title="Ofertas do dia"
      data={data as Product[]}
    />
  );
}
