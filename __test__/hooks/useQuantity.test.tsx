import { act, renderHook } from '@testing-library/react';

const DEFAULT_QUANTITY = 1;

describe('수량 조절하는 훅이 올바르게 작동한다.', () => {
  test('', () => {});
  test('수량 감소를 실행했을 때 1씩 감소한다.', () => {
    const count = 3;
    const { result } = renderHook(() => useQuantity(count));

    const { decreaseQuantity, quantity } = result.current;

    act(() => {
      decreaseQuantity();
    });

    expect(quantity).toBe(count - 1);
  });
  test('수량 증가를 실행했을 때 1씩 늘어난다.', () => {
    const { result } = renderHook(() => useQuantity(DEFAULT_QUANTITY));

    const { increaseQuantity, quantity } = result.current;

    act(() => {
      increaseQuantity();
    });

    expect(quantity).toBe(DEFAULT_QUANTITY + 1);
  });
});
