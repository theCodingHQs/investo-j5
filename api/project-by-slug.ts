import { apiClient } from "./axios";
import { Project } from "./types/project";
import { Property } from "./types/property";

export const getProjectBySlug = async (
  slug: string
): Promise<{ projects: Project[]; properties: Property[] }> => {
  if (!slug.trim()) return { projects: [], properties: [] };

  const response = await apiClient.get<{
    projects: Project[];
    properties: Property[];
  }>(`/project/projects/${slug}`);
  return response.data;
};
