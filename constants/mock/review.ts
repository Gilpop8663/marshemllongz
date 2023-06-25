import { createRandomProductTitle, generateRandomId } from '@utils/mock';
import { Review } from '@type/productType';

export const MOCK_REVIEW_LIST: Review[] = [
  {
    id: generateRandomId(16),
    name: '이즈리얼',
    category: 'best',
    content:
      '두 번 탭하여 Google에서 검색합니다. 신고하기. 취소. 확인. 삭제. 어두운 테마: 사용 중지됨. 설정 · 검색 설정 · 고급검색 · Google 검색에 표시되는 데이터. 두 번 탭하여 Google에서 검색합니다. 신고하기. 취소. 확인. 삭제. 어두운 테마: 사용 중지됨. 설정 · 검색 설정 · 고급검색 · Google 검색에 표시되는 데이터.',
    date: new Date(),
    score: 4,
    imageList: [
      `https://source.unsplash.com/600x400/?nature,water&sig=${Math.floor(Math.random() * 100)}`,
      `https://source.unsplash.com/600x400/?nature,water&sig=${Math.floor(Math.random() * 100)}`,
      `https://source.unsplash.com/600x400/?nature,water&sig=${Math.floor(Math.random() * 100)}`,
      `https://source.unsplash.com/600x400/?nature,water&sig=${Math.floor(Math.random() * 100)}`,
    ],
  },
  {
    id: generateRandomId(16),
    name: createRandomProductTitle(),
    category: 'best',
    content: createRandomProductTitle(),
    date: new Date(),
    score: Math.floor(Math.random() * 5),
  },
  {
    id: generateRandomId(16),
    name: createRandomProductTitle(),
    category: 'normal',
    content: createRandomProductTitle(),
    date: new Date(),
    score: Math.floor(Math.random() * 5),
    imageList: [
      `https://source.unsplash.com/600x400/?nature,water&sig=${Math.floor(Math.random() * 100)}`,
    ],
  },
  {
    id: generateRandomId(16),
    name: createRandomProductTitle(),
    category: 'best',
    content: createRandomProductTitle(),
    date: new Date(),
    score: Math.floor(Math.random() * 5),
    imageList: [
      `https://source.unsplash.com/600x400/?nature,water&sig=${Math.floor(Math.random() * 100)}`,
    ],
  },
  {
    id: generateRandomId(16),
    name: createRandomProductTitle(),
    category: 'normal',
    content: createRandomProductTitle(),
    date: new Date(),
    score: Math.floor(Math.random() * 5),
    imageList: [
      `https://source.unsplash.com/600x400/?nature,water&sig=${Math.floor(Math.random() * 100)}`,
    ],
  },
  {
    id: generateRandomId(16),
    name: createRandomProductTitle(),
    category: 'best',
    content: createRandomProductTitle(),
    date: new Date(),
    score: Math.floor(Math.random() * 5),
    imageList: [
      `https://source.unsplash.com/600x400/?nature,water&sig=${Math.floor(Math.random() * 100)}`,
    ],
  },
  {
    id: generateRandomId(16),
    name: createRandomProductTitle(),
    category: 'normal',
    content: createRandomProductTitle(),
    date: new Date(),
    score: Math.floor(Math.random() * 5),
  },
  {
    id: generateRandomId(16),
    name: createRandomProductTitle(),
    category: 'normal',
    content: createRandomProductTitle(),
    date: new Date(),
    score: Math.floor(Math.random() * 5),
  },
  {
    id: generateRandomId(16),
    name: createRandomProductTitle(),
    category: 'normal',
    content: createRandomProductTitle(),
    date: new Date(),
    score: Math.floor(Math.random() * 5),
  },
];
