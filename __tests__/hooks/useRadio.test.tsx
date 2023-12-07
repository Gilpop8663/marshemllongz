import { renderHook } from '@testing-library/react';
import { act } from 'react-dom/test-utils';
import { useRadio } from '@hooks/useRadio';

type RadioType = 'visible' | 'hidden';

describe('input의 radio를 제어하는 훅을 테스트한다.', () => {
  test('초기 값을 설정할 수 있다.', () => {
    const { result } = renderHook(() => useRadio<RadioType>('visible'));

    const { value } = result.current;

    expect(value).toBe('visible');
  });

  test('타겟의 값을 변경할 수 있다.', () => {
    const { result } = renderHook(() => useRadio<RadioType>('visible'));

    const { changeRadio } = result.current;

    act(() => {
      changeRadio('hidden');
    });

    const { value } = result.current;

    expect(value).toBe('hidden');
  });
});
