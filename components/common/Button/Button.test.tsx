import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Button from '.';

describe('버튼 스타일이 올바르게 표시되는 지 확인한다.', () => {
  test('버튼이 흰색일 때 스타일을 확인한다.', async () => {
    render(<Button text="구매하기" color="white" />);

    const button = await screen.findByText('구매하기');

    expect(button).toHaveClass(
      'bg-primaryWhite text-primaryBlack hover:bg-primaryBlack hover:text-primaryWhite'
    );
  });

  test('버튼이 검정일 때 스타일을 확인한다.', async () => {
    render(<Button text="구매하기" color="black" />);

    const button = await screen.findByText('구매하기');

    expect(button).toHaveClass(
      'bg-primaryBlack text-primaryWhite hover:bg-darkGray hover:border-darkGray'
    );
  });
});
