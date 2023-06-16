export const getClassNames = (...classNamesArray: string[]) => {
  return classNamesArray.join(' ');
};

export const getFormattedPrice = (price: number) => {
  return price.toLocaleString('ko-KR');
};

interface GetPercentageNumberParams {
  total: number;
  percent: number;
}

export const getPercentageNumber = ({ total, percent }: GetPercentageNumberParams) => {
  if (total < 0) {
    console.error('총 가격이 음수일땐 안됩니다.');
    return null;
  }

  if (percent < 0) {
    console.error('퍼센트가 음수일땐 안됩니다.');
    return null;
  }

  if (percent > 100) {
    console.error('퍼센트가 100 초과일땐 안됩니다.');
    return null;
  }

  return total * (percent / 100);
};
