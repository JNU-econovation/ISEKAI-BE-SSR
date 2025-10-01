import axios from 'axios';
import {Direction, Page, PageParams, Sort} from '@/types/type';
import type {Prompt} from '@/app/admin/prompts/types';

export interface GetPromptsResponse {
  prompts: Prompt[];
  totalPages: number;
}

export async function getPrompts(
    pageParams: PageParams = {page: 0, size: 10, sort: Sort.CREATED_AT, direction: Direction.DESC},
): Promise<GetPromptsResponse> {
  try {
    const response = await axios.get<Page<Prompt>>(createAdminPromptsUrl(pageParams));

    return {prompts: response.data.content, totalPages: response.data.totalPages};
  } catch (error) {
    console.error("Failed to fetch prompts:", error);

    return {prompts: [], totalPages: 0}
  }
}

function createAdminPromptsUrl(
    pageParams: PageParams = {page: 0, size: 10, sort: Sort.CREATED_AT, direction: Direction.DESC},
): string {
  const API_BASE_URL = 'http://localhost:8080';
  const endpoint = `${API_BASE_URL}/admin/prompts`;

  const params = new URLSearchParams();

  params.append('page', String(pageParams.page));
  params.append('size', String(pageParams.size));
  params.append('sort', pageParams.sort);
  params.append('direction', pageParams.direction);

  return `${endpoint}?${params.toString()}`;
}
