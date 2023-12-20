import { ChangeEvent, useState } from 'react';

export const useRadio = <T extends string>(initialValue: T) => {
  const [value, setValue] = useState(initialValue);

  const changeRadio = (event: ChangeEvent<HTMLInputElement>) => {
    const targetValue = event.currentTarget.value as T;

    setValue(targetValue);
  };

  return { state: value, onChange: changeRadio };
};
