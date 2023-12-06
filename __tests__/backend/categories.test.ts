import { getCategoryList } from '@backend/api/categories';
import { prismaMock } from 'singleton';

describe('비회원 카테고리 목록 조회 기능을 구현한다.', () => {
  test('상품카테고리 목록을 불러온다', async () => {
    const CATEGORY_INFO_RESULT = [
      {
        id: 1,
        isVisible: true,
        name: '스티커/마스킹테이프',
        description: '다들 마스킹테이프 필요하지 않으세요?',
      },
      {
        id: 2,
        isVisible: false,
        name: '스티커/마스킹테이프',
        description: '다들 마스킹테이프 필요하지 않으세요?',
      },
    ];

    prismaMock.recipeCategory.findMany.mockResolvedValue(CATEGORY_INFO_RESULT);

    await expect(getCategoryList()).resolves.toEqual(CATEGORY_INFO_RESULT);
  });
});
