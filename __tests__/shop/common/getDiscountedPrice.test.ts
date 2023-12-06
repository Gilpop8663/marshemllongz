import { getDiscountedPrice } from '@utils/shop/common';

describe('getDiscountedPrice 함수는 discountPercent와 price를 할인된 금액을 반환합니다.', () => {
  test.each([
    // [discountPercent, price, result]
    [0, 10000, null], // 할인율이 0%인 경우, null 반환
    [50, 20000, 10000], // 50% 할인 적용
    [30, 15000, 10500], // 30%할인 적용
    [10, 5000, 4500], // 10% 할인 적용
    [100, 5000, 0], // 100% 할인 적용
    [150, 5000, null], // 퍼센트가 100을 초과했을 때 null 반환
  ])(
    'discountPercent가 %i이고 price가 %i인 경우, 할인된 금액은 %s이어야 합니다.',
    (discountPercent, price, expected) => {
      expect(getDiscountedPrice({ discountPercent, price })).toEqual(expected);
    }
  );
});
