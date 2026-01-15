import { useQuery } from "@tanstack/react-query";
import { searchLocation } from "@/api/search";

export const useSearchLocation = (query: string) => {
  return useQuery({
    queryKey: ["search-location", query],
    queryFn: () => searchLocation(query),
    enabled: !!query?.trim(),
    staleTime: 1000 * 60,
  });
};
