import { act, render, renderHook } from '@testing-library/react';
import { useQuantity } from '@hooks/useQuantity';

const DEFAULT_QUANTITY = 1;
const DEFAULT_STOCK = 1000;

describe('수량 조절하는 훅이 올바르게 작동한다.', () => {
  test('보여지는 초기 수량 설정이 가능해야 한다.', () => {
    const count = 3;

    const { result } = renderHook(() => useQuantity(count, { stock: DEFAULT_STOCK }));

    const { quantity } = result.current;

    expect(quantity).toBe(count);
  });

  test('초기 수량이 재고보다 크다면 초기 수량을 재고로 설정한다.', () => {
    const stock = 1;
    const count = 3;

    const { result } = renderHook(() => useQuantity(count, { stock }));

    const { quantity } = result.current;

    expect(quantity).toBe(stock);
  });
  test('수량 감소를 실행했을 때 1씩 감소한다.', () => {
    const count = 3;
    const { result } = renderHook(() => useQuantity(count, { stock: DEFAULT_STOCK }));

    const { decreaseQuantity } = result.current;

    act(() => {
      decreaseQuantity();
    });

    const { quantity } = result.current;

    expect(quantity).toBe(count - 1);
  });

  test('수량 감소를 하였을 때 1 미만으로 내려가지 않아야 한다. 에러 메세지를 보여줘야 한다.', () => {
    const count = 1;

    const { result } = renderHook(() => useQuantity(count, { stock: DEFAULT_STOCK }));

    const { decreaseQuantity, quantity, quantityInputRef } = result.current;

    render(<input ref={quantityInputRef} />);

    act(() => {
      decreaseQuantity();
    });

    expect(quantity).toBe(count);

    expect(quantityInputRef.current?.validationMessage).toBe(
      '상품의 수량은 최소 1개 이상 있어야 합니다.'
    );
  });

  test('수량 증가를 실행했을 때 1씩 늘어난다.', () => {
    const { result } = renderHook(() => useQuantity(DEFAULT_QUANTITY, { stock: DEFAULT_STOCK }));

    const { increaseQuantity } = result.current;

    act(() => {
      increaseQuantity();
    });
    const { quantity } = result.current;

    expect(quantity).toBe(DEFAULT_QUANTITY + 1);
  });

  test('현재 재고와 수량이 같은 상황에서 수량 증가를 실행했을 때 수량이 올라가지 않아야 한다. 그리고 오류 메세지를 보여준다.', () => {
    const stock = 3;

    const { result } = renderHook(() => useQuantity(stock, { stock }));

    const { increaseQuantity, quantityInputRef } = result.current;

    render(<input ref={quantityInputRef} />);

    act(() => {
      increaseQuantity();
    });

    const { quantity } = result.current;

    expect(quantity).toBe(stock);

    expect(quantityInputRef.current?.validationMessage).toBe(
      `현재 상품의 재고는 ${stock}개 입니다.`
    );
  });

  test('수량을 입력하였을 때 수량이 업데이트 되어야 한다..', () => {
    const { result } = renderHook(() => useQuantity(DEFAULT_QUANTITY, { stock: DEFAULT_STOCK }));

    const { updateQuantity, quantityInputRef } = result.current;

    render(<input ref={quantityInputRef} />);

    act(() => {
      updateQuantity(100);
    });

    const { quantity } = result.current;

    expect(quantity).toBe(100);
  });

  test('입력 값이 재고보다 많다면 오류 메세지를 보여주고 수량을 재고의 양으로 설정한다.', () => {
    const stock = 92;

    const { result } = renderHook(() => useQuantity(DEFAULT_QUANTITY, { stock }));

    const { updateQuantity, quantityInputRef } = result.current;

    render(<input ref={quantityInputRef} />);

    act(() => {
      updateQuantity(100);
    });

    const { quantity } = result.current;

    expect(quantity).toBe(stock);

    expect(quantityInputRef.current?.validationMessage).toBe(
      `현재 상품의 재고는 ${stock}개 입니다.`
    );
  });

  test('입력 값이 1보다 적다면 오류 메세지를 보여주고 수량을 1로 설정한다.', () => {
    const { result } = renderHook(() => useQuantity(DEFAULT_QUANTITY, { stock: DEFAULT_STOCK }));

    const { updateQuantity, quantityInputRef } = result.current;

    render(<input ref={quantityInputRef} />);

    act(() => {
      updateQuantity(0);
    });

    const { quantity } = result.current;

    expect(quantity).toBe(1);

    expect(quantityInputRef.current?.validationMessage).toBe(
      '상품의 수량은 최소 1개 이상 있어야 합니다.'
    );
  });
});
