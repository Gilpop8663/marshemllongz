import { useState } from 'react';

export const useRadio = <T extends string>(initialValue: T) => {
  const [value, setValue] = useState(initialValue);

  const changeRadio = (newValue: T) => {
    setValue(newValue);
  };

  return { value, changeRadio };
};
