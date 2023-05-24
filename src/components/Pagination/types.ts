export type PaginationProps = {
  hasPrev: boolean;
  hasNext: boolean;
  currentPage: number;
  total: number;
  onPageChange: (page: number) => void;
};
