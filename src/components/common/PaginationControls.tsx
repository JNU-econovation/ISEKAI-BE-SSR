'use client';

import {useRouter, useSearchParams} from 'next/navigation';
import {PaginationControlProps} from "@/types/type";
import styles from './PagenationControls.module.css'

export default function PaginationControls(
    {currentPage, totalPages, basePath}: PaginationControlProps
) {
  const router = useRouter();
  const searchParams = useSearchParams();

  const handlePageChange = (newPage: number) => {
    if (newPage < 1 || newPage > totalPages) return;

    const currentParams = new URLSearchParams(searchParams.toString());
    currentParams.set('page', String(newPage));

    router.push(`${basePath}?${currentParams.toString()}`);
  };

  return (
      <div className={styles.paginationControlsContainer}>
        <button className={styles.paginationPreviousButton}
                onClick={() => handlePageChange(currentPage - 1)} disabled={currentPage <= 1}>
          이전
        </button>

        <div>
          {
            getPageRange(currentPage, totalPages).map((page, index) => (
                <button key={index} onClick={() => handlePageChange(page)}>{page}</button>
            ))
          }
        </div>

        <button className={styles.paginationPreviousButton}
                onClick={() => handlePageChange(currentPage + 1)}
                disabled={currentPage >= totalPages}>
          다음
        </button>
      </div>
  );
}

function getPageRange(currentPage: number, totalPages: number): number[] {
  const startPage = Math.max(currentPage - 5, 1)
  const endPage = Math.min(currentPage + 5, totalPages)
  const length = endPage - startPage + 1

  if (length < 1) return [1]

  return Array.from({length: length}, (_, i) => startPage + i)
}