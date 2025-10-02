import type {Prompt} from "@/app/admin/prompts/types";

export interface GetPromptsResponse {
  prompts: Prompt[];
  totalPages: number;
}