import { getPageRange } from '@utils/shop/common';

describe('getPageRange 함수는 currentPage와 totalPages를 입력받아 시작 페이지와 끝 페이지를 5단위로 반환합니다.', () => {
  test.each([
    // [currentPage, totalPages, [startPage, endPage]]
    [1, 1, [1, 1]], // 첫 페이지, 전체 페이지 1개
    [1, 5, [1, 5]], // 첫 페이지, 전체 페이지 5개
    [5, 5, [1, 5]], // 마지막 페이지, 전체 페이지 5개
    [6, 10, [6, 10]], // 첫 페이지가 아닌 경우
    [10, 10, [6, 10]], // 마지막 페이지, 전체 페이지 10개
    [11, 20, [11, 15]], // 중간 페이지
    [20, 20, [16, 20]], // 마지막 페이지, 전체 페이지 20개
    [3, 6, [1, 5]], // 페이지가 5개 이하인 경우, 시작 페이지가 1인 경우
    [4, 6, [1, 5]], // 페이지가 5개 이하인 경우, 시작 페이지가 1이 아닌 경우
  ])(
    'currentPage가 %i이고 totalPages가 %i인 경우, 시작 페이지와 끝 페이지는 %s이어야 합니다.',
    (currentPage, totalPages, expected) => {
      expect(getPageRange({currentPage, totalPages})).toEqual(expected);
    }
  );
});
