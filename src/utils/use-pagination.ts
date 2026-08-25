import { useState } from "react";

export const usePagination = (totalItems: number, perPage: number) => {
  const [page, setPage] = useState(1);
  const [direction, setDirection] = useState(1);
  const totalPages = Math.max(1, Math.ceil(totalItems / perPage));

  const next = () => {
    setDirection(1);
    setPage((prev) => Math.min(prev + 1, totalPages));
  };

  const prev = () => {
    setDirection(-1);
    setPage((prev) => Math.max(prev - 1, 1));
  };

  return { page, totalPages, direction, next, prev };
};
