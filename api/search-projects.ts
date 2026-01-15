import { SearchResult } from "@/components/search-project/map/types";
import { apiClient } from "./axios";

export const searchProject = async (query: string): Promise<SearchResult[]> => {
  if (!query?.trim()) return [];

  const response = await apiClient.get<SearchResult[]>("/project/search", {
    params: {
      term: query,
      residency_type: "residential",
    },
  });

  return response.data;
};
