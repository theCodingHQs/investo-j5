import { apiClient } from "@/lib/axios";
import { Project } from "./types/project";

export const getProject = async (slug: string): Promise<Project> => {
  if (!slug.trim()) return {} as Project;

  const response = await apiClient.get<Project>(`/projects/${slug}`);
  console.log("first");
  return response.data;
};
