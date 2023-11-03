import { useQuery } from "@tanstack/react-query";
import { AxiosResponse } from "axios";
import { Offer } from "../types";
import { api } from "../services/api";

export function useFetchOffers() {
  return useQuery({
    queryKey: ["offers"],
    queryFn: (): Promise<AxiosResponse<Offer[]>> => api.get("/catalog/offers"),
    select: (response) => response.data,
  });
}
