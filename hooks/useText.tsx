import React, { useState } from 'react';

export interface UseTextProps {
  value: string;
  onChange: (event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => void;
}

export const useText = (originalText: string = '', limit: number) => {
  const [text, setText] = useState(originalText);

  const handleTextChange = (event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
    const { value } = event.target;
    const standard = value.length;

    if (standard > limit) {
      event.target.setCustomValidity(`해당 입력값은 ${limit}자까지 입력 가능합니다.`);
      event.target.reportValidity();
      return;
    }

    setText(value);
    event.target.setCustomValidity('');
  };

  return { value: text, onChange: handleTextChange };
};
