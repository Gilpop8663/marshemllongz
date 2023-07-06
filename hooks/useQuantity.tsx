import { useRef, useState } from 'react';

interface OptionsParams {
  stock: number;
}

export const useQuantity = (initialCount: number, { stock }: OptionsParams) => {
  const [quantity, setQuantity] = useState(initialCount);
  const quantityInputRef = useRef<HTMLInputElement>(null);

  const decreaseQuantity = () => {
    if (quantity === 1) {
      quantityInputRef.current?.setCustomValidity('상품의 수량은 최소 1개 이상 있어야 합니다.');
      return;
    }

    quantityInputRef.current?.setCustomValidity('');
    setQuantity((prev) => prev - 1);
  };

  const increaseQuantity = () => {
    if (quantity === stock) {
      quantityInputRef.current?.setCustomValidity(`현재 상품의 재고는 ${stock}개 입니다.`);
      return;
    }

    quantityInputRef.current?.setCustomValidity('');
    setQuantity((prev) => prev + 1);
  };

  const updateQuantity = (count: number) => {
    if (count < 1) {
      setQuantity(1);
      quantityInputRef.current?.setCustomValidity('상품의 수량은 최소 1개 이상 있어야 합니다.');
      return;
    }

    if (count > stock) {
      setQuantity(stock);
      quantityInputRef.current?.setCustomValidity(`현재 상품의 재고는 ${stock}개 입니다.`);
      return;
    }

    setQuantity(count);
    quantityInputRef.current?.setCustomValidity('');
  };

  return { quantity, updateQuantity, increaseQuantity, decreaseQuantity, quantityInputRef };
};
