import { useQuery } from "@tanstack/react-query";
import { searchProject } from "@/api/search-projects";

export const useSearchProject = (query: string) => {
  return useQuery({
    queryKey: ["search-project", query],
    queryFn: () => searchProject(query),
    enabled: !!query?.trim(),
    staleTime: 1000 * 60,
  });
};
