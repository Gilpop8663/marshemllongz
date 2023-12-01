export const createRandomProductTitle = () => {
  const firstWords = [
    '상큼한',
    '신선한',
    '달콤한',
    '짭짤한',
    '아삭한',
    '부드러운',
    '따뜻한',
    '시원한',
    '뜨거운',
    '매운',
    '얼얼한',
    '냉장고에 있는',
    '어제 만든',
  ];
  const secondWords = [
    '과일',
    '케이크',
    '초콜릿',
    '파이',
    '와플',
    '아이스크림',
    '슈크림',
    '요거트',
    '컵케이크',
    '카스텔라',
    '쿠키',
    '젤리',
    '푸딩',
  ];
  const thirdWords = [
    '맛있는',
    '좋은',
    '훌륭한',
    '고소한',
    '건강한',
    '진한',
    '부드러운',
    '만족스러운',
    '달콤한',
    '시원한',
    '아삭한',
    '딱딱한',
    '부드러운',
  ];

  const rand1 = Math.floor(Math.random() * firstWords.length);
  const rand2 = Math.floor(Math.random() * secondWords.length);
  const rand3 = Math.floor(Math.random() * thirdWords.length);

  const product = `${firstWords[rand1]} ${secondWords[rand2]} ${thirdWords[rand3]}`;
  return product;
};

export const generateRandomId = (length: number) => {
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let result = '';
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  return result;
};
