export const PRODUCT_MAX_LENGTH = {
  TITLE: 100,
  DESCRIPTION: 100,
  RIBON_TEXT: 100,
  INGREDIENT: 1000,
  OPTION_CONTENT: 100,
  CAUTION: 100,
};

export const PRODUCT_ERROR_MESSAGE = {
  TITLE: `상품명은 ${PRODUCT_MAX_LENGTH.TITLE}글자 이하여야 합니다.`,
  DESCRIPTION: `상품 설명 이미지는 ${PRODUCT_MAX_LENGTH.DESCRIPTION}개 이하여야 합니다.`,
  RIBON_TEXT: `상품 추가 설명 글자는 ${PRODUCT_MAX_LENGTH.RIBON_TEXT}글자 이하여야 합니다.`,
  INGREDIENT: `상품 재료 글자는 ${PRODUCT_MAX_LENGTH.INGREDIENT}글자 이하여야 합니다.`,
  CAUTION: `상품 주의 사항 글자는 ${PRODUCT_MAX_LENGTH.CAUTION}글자 이하여야 합니다.`,
  PRICE: '가격은 1원부터 입력 가능합니다.',
  OPTION_CONTENT: `상품 옵션 글자는 ${PRODUCT_MAX_LENGTH.INGREDIENT}글자 이하여야 합니다.`,
  OPTION_INVENTORY: `상품의 재고는 0개부터 입력 가능합니다.`,
  INTEGER: `소수점이 아닌 정수로 입력해주세요.`,
};
