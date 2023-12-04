import { prismaMock } from '@tests/singleton';

describe('운영자 카테고리 등록 기능을 구현한다.', () => {
  test('이름, 설명을 추가하여 카테고리 등록한다.', async () => {
    const CATEGORY_INFO = {
      id: 1,
      isVisible: true,
      name: '스티커/마스킹테이프',
      description: '다들 마스킹테이프 필요하지 않으세요?',
    };

    prismaMock.recipeCategory.create.mockResolvedValue(CATEGORY_INFO);

    const result = {
      name: CATEGORY_INFO.name,
      description: CATEGORY_INFO.description,
      quantity: 0,
    };

    await expect(createCategory(CATEGORY_INFO)).resolves.toEqual(result);
  });

  test('카테고리 등록 시 이름이 30자 이상이라면 에러 메세지를 반환한다.', async () => {
    const CATEGORY_INFO = {
      id: 1,
      isVisible: true,
      name: '스티커/마스킹테이프스티커/마스킹테이프스티커/마스킹테이프스티커/마스킹테이프스티커/마스킹테이프스티커/마스킹테이프',
      description: '다들 마스킹테이프 필요하지 않으세요?',
    };

    prismaMock.recipeCategory.create.mockResolvedValue(CATEGORY_INFO);

    await expect(createCategory(CATEGORY_INFO)).toThrowError(
      '카테고리 이름이 너무 깁니다. 30자 미만으로 작성해주세요.'
    );
  });

  test('카테고리 등록 시 설명이 50자 이상이라면 에러 메세지를 반환한다.', () => {
    const CATEGORY_INFO = {
      id: 1,
      isVisible: true,
      name: '스티커/마스킹테이프',
      description:
        '다들 마스킹테이프 필요하지 않으세요? 스티커/마스킹테이프스티커/마스킹테이프스티커/마스킹테이프스티커/마스킹테이프스티커/마스킹테이프스티커/마스킹테이프스티커/마스킹테이프스티커/마스킹테이프스티커/마스킹테이프스티커/마스킹테이프스티커/마스킹테이프스티커/마스킹테이프',
    };

    prismaMock.recipeCategory.create.mockResolvedValue(CATEGORY_INFO);

    expect(createCategory(CATEGORY_INFO)).toThrowError(
      '카테고리 설명이 너무 깁니다. 50자 미만으로 작성해주세요.'
    );
  });
});

describe('운영자 카테고리 수정 기능을 구현한다.', () => {
  test('이름, 설명, 공개 여부 정보를 토대로 카테고리를 수정한다.', async () => {
    const CATEGORY_INFO = {
      id: 1,
      name: '스티커/마스킹테이프',
      description:
        '다들 마스킹테이프 필요하지 않으세요? 스티커/마스킹테이프스티커/마스킹테이프스티커/마스킹테이프스티커/마스킹테이프스티커/마스킹테이프스티커/마스킹테이프스티커/마스킹테이프스티커/마스킹테이프스티커/마스킹테이프스티커/마스킹테이프스티커/마스킹테이프스티커/마스킹테이프',
      isVisible: true,
    };

    prismaMock.recipeCategory.update.mockResolvedValue(CATEGORY_INFO);

    await expect(modifyCategory(CATEGORY_INFO)).resolves.toEqual(CATEGORY_INFO);
  });

  test('카테고리 수정 시 이름이 30자 이상이라면 에러 메세지를 반환한다.', async () => {
    const CATEGORY_INFO = {
      id: 1,
      name: '다들 마스킹테이프 필요하지 않으세요? 스티커/마스킹테이프스티커/마스킹테이프스티커/마스킹테이프스티커/마스킹테이프스티커/마스킹테이프스티커/마스킹테이프스티커/마스킹테이프스티커/마스킹테이프스티커/마스킹테이프스티커/마스킹테이프스티커/마스킹테이프스티커/마스킹테이프',
      description: '다들 마스킹테이프 필요하지 않으세요?',
      isVisible: true,
    };

    prismaMock.recipeCategory.update.mockResolvedValue(CATEGORY_INFO);

    await expect(modifyCategory(CATEGORY_INFO)).toThrowError(
      '카테고리 이름이 너무 깁니다. 30자 미만으로 작성해주세요.'
    );
  });

  test('카테고리 수정 시 설명이 50자 이상이라면 에러 메세지를 반환한다.', () => {
    const CATEGORY_INFO = {
      id: 1,
      isVisible: true,
      name: '스티커/마스킹테이프',
      description:
        '다들 마스킹테이프 필요하지 않으세요? 스티커/마스킹테이프스티커/마스킹테이프스티커/마스킹테이프스티커/마스킹테이프스티커/마스킹테이프스티커/마스킹테이프스티커/마스킹테이프스티커/마스킹테이프스티커/마스킹테이프스티커/마스킹테이프스티커/마스킹테이프스티커/마스킹테이프',
    };

    prismaMock.recipeCategory.update.mockResolvedValue(CATEGORY_INFO);

    expect(modifyCategory(CATEGORY_INFO)).toThrowError(
      '카테고리 설명이 너무 깁니다. 50자 미만으로 작성해주세요.'
    );
  });
});
