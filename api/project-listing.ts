import { apiClient } from "./axios";
import { Project } from "./types/project";
import { Property } from "./types/property";

export const getProjectListing = async (
  slug: string
): Promise<{ projects: Project[]; properties: Property[] }> => {
  if (!slug.trim()) return { projects: [], properties: [] };

  const response = await apiClient.get<{
    projects: Project[];
    properties: Property[];
  }>(
    "/project/listing?builder=5f607ba630b4a30004f60749&q=all&residency_type=residential&scope=project&limit=1000"
  );
  return response.data;
};
