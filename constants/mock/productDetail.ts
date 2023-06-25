import { createRandomProductTitle, generateRandomId } from '@utils/mock';
import { ProductItem } from '@type/productType';

const imageList = [];

for (let i = 0; i < 10; i++) {
  imageList.push({
    url: `https://source.unsplash.com/600x400/?nature,water&sig=${Math.floor(Math.random() * 100)}`,
    name: createRandomProductTitle(),
  });
}

export const MOCK_PRODUCT_DETAIL: ProductItem = {
  id: generateRandomId(16),
  title: createRandomProductTitle(),
  price: Math.floor(Math.random() * 10000),
  imageList,
  rating: 3,
  reviews: [
    {
      id: generateRandomId(16),
      name: '이즈리얼',
      category: 'best',
      content:
        '두 번 탭하여 Google에서 검색합니다. 신고하기. 취소. 확인. 삭제. 어두운 테마: 사용 중지됨. 설정 · 검색 설정 · 고급검색 · Google 검색에 표시되는 데이터.',
      date: new Date(),
      score: 4,
      imageList: [
        `https://source.unsplash.com/600x400/?nature,water&sig=${Math.floor(Math.random() * 100)}`,
      ],
    },
  ],
  stock: 3,
  optionKind: 'size',
  options: [
    { label: '선택하세요.', description: '', value: '' },
    { label: '9.7~11 inch', description: '', value: '' },
    { label: '12~14 inch', description: '(+6,000원)', value: '' },
    { label: '15~16 inch', description: '(+16,000원)', value: '' },
    { label: '17 inch', description: '(+20,000원)', value: '' },
  ],
};
