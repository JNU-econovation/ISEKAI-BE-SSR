export interface Page<T> {
  content: T[]
  totalPages: number
  totalElements: number
  size: number
  number: number
}

export enum Direction {
  ASC = 'asc',
  DESC = 'desc',
}

export enum Sort {
  CREATED_AT = 'createdAt'
}

export interface PageParams {
  page: number
  size: number
  sort: Sort
  direction: Direction
}

export interface PaginationControlProps {
  currentPage: number
  totalPages: number
  basePath: string
}