import { SearchResult } from "@/components/search-project/map/types";
import { apiClient } from "@/lib/axios";

export const searchLocation = async (
  query: string
): Promise<SearchResult[]> => {
  if (!query?.trim()) return [];

  const response = await apiClient.get<SearchResult[]>(
    "https://nominatim.openstreetmap.org/search",
    {
      params: {
        format: "json",
        q: query,
        polygon_geojson: 1,
        limit: 5,
      },
    }
  );

  return response.data;
};
