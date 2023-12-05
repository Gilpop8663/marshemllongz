import { createCategory, modifyCategory } from '@backend/api/admin/category';
import { CATEGORY_ERROR_MESSAGE, CATEGORY_MAX_LENGTH } from '@backend/constants/category';
import { prismaMock } from '@tests/singleton';

describe('운영자 카테고리 등록 기능을 구현한다.', () => {
  test('이름, 설명을 추가하여 카테고리 등록한다.', async () => {
    const CATEGORY_INFO = {
      name: '스티커/마스킹테이프',
      description: '다들 마스킹테이프 필요하지 않으세요?',
    };

    const CATEGORY_INFO_RESULT = {
      id: 1,
      isVisible: true,
      ...CATEGORY_INFO,
    };

    prismaMock.recipeCategory.create.mockResolvedValue(CATEGORY_INFO_RESULT);

    await expect(createCategory(CATEGORY_INFO)).resolves.toEqual(CATEGORY_INFO_RESULT);
  });

  test(`카테고리 등록 시 이름이 ${CATEGORY_MAX_LENGTH.NAME}글자 초과라면 에러 메세지를 반환한다.`, async () => {
    const CATEGORY_INFO = {
      name: '스티커/마스킹테이프스티커/마스킹테이프스티커/마스킹테이프스티커/마스킹테이프스티커/마스킹테이프스티커/마스킹테이프',
      description: '다들 마스킹테이프 필요하지 않으세요?',
    };

    const CATEGORY_INFO_RESULT = {
      id: 1,
      isVisible: true,
      ...CATEGORY_INFO,
    };

    prismaMock.recipeCategory.create.mockResolvedValue(CATEGORY_INFO_RESULT);

    await expect(createCategory(CATEGORY_INFO)).rejects.toThrowError(CATEGORY_ERROR_MESSAGE.NAME);
  });

  test(`카테고리 등록 시 설명이 ${CATEGORY_MAX_LENGTH.DESCRIPTION}글자 초과라면 에러 메세지를 반환한다.`, async () => {
    const CATEGORY_INFO = {
      name: '스티커/마스킹테이프',
      description:
        '다들 마스킹테이프 필요하지 않으세요? 스티커/마스킹테이프스티커/마스킹테이프스티커/마스킹테이프스티커/마스킹테이프스티커/마스킹테이프스티커/마스킹테이프스티커/마스킹테이프스티커/마스킹테이프스티커/마스킹테이프스티커/마스킹테이프스티커/마스킹테이프스티커/마스킹테이프',
    };

    const CATEGORY_INFO_RESULT = {
      id: 1,
      isVisible: true,
      ...CATEGORY_INFO,
    };

    prismaMock.recipeCategory.create.mockResolvedValue(CATEGORY_INFO_RESULT);

    await expect(createCategory(CATEGORY_INFO)).rejects.toThrowError(
      CATEGORY_ERROR_MESSAGE.DESCRIPTION
    );
  });
});

describe('운영자 카테고리 수정 기능을 구현한다.', () => {
  beforeEach(() => {
    const CATEGORY_INFO = {
      id: 1,
      name: '스티커/마스킹테이프',
      description: '다들 마스킹테이프 필요하지 않으세요?',
      isVisible: true,
    };

    prismaMock.recipeCategory.create.mockResolvedValue(CATEGORY_INFO);
  });

  test('이름, 설명, 공개 여부 정보를 토대로 카테고리를 수정한다.', async () => {
    const CATEGORY_INFO = {
      name: '스티커/마스킹테이프',
      description: '다들 마스킹테이프 필요하지 않으세요? ',
      isVisible: true,
    };

    const CATEGORY_INFO_RESULT = {
      id: 1,
      ...CATEGORY_INFO,
    };

    prismaMock.recipeCategory.update.mockResolvedValue(CATEGORY_INFO_RESULT);

    await expect(modifyCategory(CATEGORY_INFO_RESULT)).resolves.toEqual(CATEGORY_INFO_RESULT);
  });

  test(`카테고리 수정 시 이름이 ${CATEGORY_MAX_LENGTH.NAME}글자 초과라면 에러 메세지를 반환한다.`, async () => {
    const CATEGORY_INFO = {
      name: '다들 마스킹테이프 필요하지 않으세요? 스티커/마스킹테이프스티커/마스킹테이프스티커/마스킹테이프스티커/마스킹테이프스티커/마스킹테이프스티커/마스킹테이프스티커/마스킹테이프스티커/마스킹테이프스티커/마스킹테이프스티커/마스킹테이프스티커/마스킹테이프스티커/마스킹테이프',
      description: '다들 마스킹테이프 필요하지 않으세요?',
      isVisible: true,
    };

    const CATEGORY_INFO_RESULT = {
      id: 1,
      ...CATEGORY_INFO,
    };

    prismaMock.recipeCategory.update.mockResolvedValue(CATEGORY_INFO_RESULT);

    await expect(modifyCategory(CATEGORY_INFO_RESULT)).rejects.toThrowError(
      CATEGORY_ERROR_MESSAGE.NAME
    );
  });

  test(`카테고리 수정 시 설명이 ${CATEGORY_MAX_LENGTH.NAME}글자 초과라면 에러 메세지를 반환한다.`, async () => {
    const CATEGORY_INFO = {
      isVisible: true,
      name: '스티커/마스킹테이프',
      description:
        '다들 마스킹테이프 필요하지 않으세요? 스티커/마스킹테이프스티커/마스킹테이프스티커/마스킹테이프스티커/마스킹테이프스티커/마스킹테이프스티커/마스킹테이프스티커/마스킹테이프스티커/마스킹테이프스티커/마스킹테이프스티커/마스킹테이프스티커/마스킹테이프스티커/마스킹테이프',
    };

    const CATEGORY_INFO_RESULT = {
      id: 1,
      ...CATEGORY_INFO,
    };

    prismaMock.recipeCategory.update.mockResolvedValue(CATEGORY_INFO_RESULT);

    await expect(modifyCategory(CATEGORY_INFO_RESULT)).rejects.toThrowError(
      CATEGORY_ERROR_MESSAGE.DESCRIPTION
    );
  });
});
