import { useQuery } from "@tanstack/react-query";
import { getProject } from "@/api/project";

export const useGetProject = (query?: string) => {
  return useQuery({
    queryKey: ["get-project", query],
    queryFn: () => getProject(query || ""),
    enabled: !!query?.trim(),
    staleTime: 1000 * 60,
  });
};
