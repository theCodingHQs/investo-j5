import { useQuery } from "@tanstack/react-query";
import { getProjectListing } from "@/api/project-listing";

export const useProjectListing = (query?: string) => {
  return useQuery({
    queryKey: ["get-project", query],
    queryFn: () => getProjectListing(query || ""),
    enabled: !!query?.trim(),
    staleTime: 1000 * 60,
  });
};
