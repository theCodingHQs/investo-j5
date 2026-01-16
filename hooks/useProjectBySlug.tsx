import { useQuery } from "@tanstack/react-query";
import { getProjectListing } from "@/api/project-listing";
import { getProjectBySlug } from "@/api/project-by-slug";

export const useProjectBySlug = (slug?: string) => {
  return useQuery({
    queryKey: ["get-project-by-slug", slug],
    queryFn: () => getProjectBySlug(slug || ""),
    enabled: !!slug?.trim(),
    staleTime: 1000 * 60,
  });
};
