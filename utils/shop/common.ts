interface GetPageRangeParams {
  totalPages: number;
  currentPage: number;
}

export const getPageRange = ({ currentPage, totalPages }: GetPageRangeParams) => {
  const startPage = Math.floor((currentPage - 1) / 5) * 5 + 1;
  const endPage = Math.min(startPage + 4, totalPages);

  return [startPage, endPage];
};
