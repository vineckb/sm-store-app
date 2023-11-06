import { useQuery } from "@tanstack/react-query";
import { AxiosResponse } from "axios";
import { Product, Section } from "../types";
import { api } from "../services/api";

export function useFetchOffers() {
  return useQuery({
    queryKey: ["offers"],
    queryFn: (): Promise<AxiosResponse<Product[]>> =>
      api.get("/catalog/offers"),
    select: (response) => response.data,
  });
}

export function useFetchFeaturedSections() {
  return useQuery({
    queryKey: ["featured-sections"],
    queryFn: (): Promise<AxiosResponse<Section[]>> =>
      api.get("/catalog/featured-sections"),
    select: (response) => response.data,
  });
}
