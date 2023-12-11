import { fireEvent, render, renderHook, screen } from '@testing-library/react';
import { useRadio } from '@hooks/useRadio';

type RadioType = 'visible' | 'hidden';

describe('input의 radio를 제어하는 훅을 테스트한다.', () => {
  test('초기 값을 설정할 수 있다.', () => {
    const { result } = renderHook(() => useRadio<RadioType>('visible'));

    const { state } = result.current;

    expect(state).toBe('visible');
  });

  test('타겟의 값을 변경할 수 있다.', () => {
    const { result } = renderHook(() => useRadio<RadioType>('visible'));

    const { onChange } = result.current;
    render(<input type="radio" value="hidden" onChange={onChange} alt="radio" />);

    fireEvent.click(screen.getByAltText('radio'));

    const { state } = result.current;

    expect(state).toBe('hidden');
  });
});
