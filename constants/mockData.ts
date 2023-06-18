import { createRandomProductTitle, generateRandomId } from '@utils/mock';
import {
  ProductCart,
  ProductItem,
  ProductItemPreview,
  RecommendedProduct,
} from '@type/productType';

export const MOCK_PREVIEW_PRODUCT_LIST: ProductItemPreview[] = [
  {
    id: generateRandomId(16),
    hoverImageUrl: `https://source.unsplash.com/600x400/?nature,water&sig=${Math.floor(
      Math.random() * 100
    )}`,
    imageUrl: `https://source.unsplash.com/600x400/?nature,water&sig=${Math.floor(
      Math.random() * 100
    )}`,
    price: Math.floor(Math.random() * 10000),
    title: createRandomProductTitle(),
    category: 'best',
  },
  {
    id: generateRandomId(16),
    hoverImageUrl: `https://source.unsplash.com/600x400/?nature,water&sig=${Math.floor(
      Math.random() * 100
    )}`,
    imageUrl: `https://source.unsplash.com/600x400/?nature,water&sig=${Math.floor(
      Math.random() * 100
    )}`,
    price: Math.floor(Math.random() * 10000),
    title: createRandomProductTitle(),
    category: 'new',
    discountPercent: Math.floor(Math.random() * 100),
  },
  {
    id: generateRandomId(16),
    hoverImageUrl: `https://source.unsplash.com/600x400/?nature,water&sig=${Math.floor(
      Math.random() * 100
    )}`,
    imageUrl: `https://source.unsplash.com/600x400/?nature,water&sig=${Math.floor(
      Math.random() * 100
    )}`,
    price: Math.floor(Math.random() * 10000),
    title: createRandomProductTitle(),
    category: 'best',
    discountPercent: Math.floor(Math.random() * 100),
  },
  {
    id: generateRandomId(16),
    hoverImageUrl: `https://source.unsplash.com/600x400/?nature,water&sig=${Math.floor(
      Math.random() * 100
    )}`,
    imageUrl: `https://source.unsplash.com/600x400/?nature,water&sig=${Math.floor(
      Math.random() * 100
    )}`,
    price: Math.floor(Math.random() * 10000),
    title: createRandomProductTitle(),
    discountPercent: Math.floor(Math.random() * 100),
  },
  {
    id: generateRandomId(16),
    hoverImageUrl: `https://source.unsplash.com/600x400/?nature,water&sig=${Math.floor(
      Math.random() * 100
    )}`,
    imageUrl: `https://source.unsplash.com/600x400/?nature,water&sig=${Math.floor(
      Math.random() * 100
    )}`,
    price: Math.floor(Math.random() * 10000),
    title: createRandomProductTitle(),
  },
  {
    id: generateRandomId(16),
    hoverImageUrl: `https://source.unsplash.com/600x400/?nature,water&sig=${Math.floor(
      Math.random() * 100
    )}`,
    imageUrl: `https://source.unsplash.com/600x400/?nature,water&sig=${Math.floor(
      Math.random() * 100
    )}`,
    price: Math.floor(Math.random() * 10000),
    title: createRandomProductTitle(),
  },
  {
    id: generateRandomId(16),
    hoverImageUrl: `https://source.unsplash.com/600x400/?nature,water&sig=${Math.floor(
      Math.random() * 100
    )}`,
    imageUrl: `https://source.unsplash.com/600x400/?nature,water&sig=${Math.floor(
      Math.random() * 100
    )}`,
    price: Math.floor(Math.random() * 10000),
    title: createRandomProductTitle(),
  },
  {
    id: generateRandomId(16),
    hoverImageUrl: `https://source.unsplash.com/600x400/?nature,water&sig=${Math.floor(
      Math.random() * 100
    )}`,
    imageUrl: `https://source.unsplash.com/600x400/?nature,water&sig=${Math.floor(
      Math.random() * 100
    )}`,
    price: Math.floor(Math.random() * 10000),
    title: createRandomProductTitle(),
  },
  {
    id: generateRandomId(16),
    hoverImageUrl: `https://source.unsplash.com/600x400/?nature,water&sig=${Math.floor(
      Math.random() * 100
    )}`,
    imageUrl: `https://source.unsplash.com/600x400/?nature,water&sig=${Math.floor(
      Math.random() * 100
    )}`,
    price: Math.floor(Math.random() * 10000),
    title: createRandomProductTitle(),
    discountPercent: Math.floor(Math.random() * 100),
  },
  {
    id: generateRandomId(16),
    hoverImageUrl: `https://source.unsplash.com/600x400/?nature,water&sig=${Math.floor(
      Math.random() * 100
    )}`,
    imageUrl: `https://source.unsplash.com/600x400/?nature,water&sig=${Math.floor(
      Math.random() * 100
    )}`,
    price: Math.floor(Math.random() * 10000),
    title: createRandomProductTitle(),
  },
  {
    id: generateRandomId(16),
    hoverImageUrl: `https://source.unsplash.com/600x400/?nature,water&sig=${Math.floor(
      Math.random() * 100
    )}`,
    imageUrl: `https://source.unsplash.com/600x400/?nature,water&sig=${Math.floor(
      Math.random() * 100
    )}`,
    price: Math.floor(Math.random() * 10000),
    title: createRandomProductTitle(),
  },
  {
    id: generateRandomId(16),
    hoverImageUrl: `https://source.unsplash.com/600x400/?nature,water&sig=${Math.floor(
      Math.random() * 100
    )}`,
    imageUrl: `https://source.unsplash.com/600x400/?nature,water&sig=${Math.floor(
      Math.random() * 100
    )}`,
    price: Math.floor(Math.random() * 10000),
    title: createRandomProductTitle(),
  },
  {
    id: generateRandomId(16),
    hoverImageUrl: `https://source.unsplash.com/600x400/?nature,water&sig=${Math.floor(
      Math.random() * 100
    )}`,
    imageUrl: `https://source.unsplash.com/600x400/?nature,water&sig=${Math.floor(
      Math.random() * 100
    )}`,
    price: Math.floor(Math.random() * 10000),
    title: createRandomProductTitle(),
  },
];

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
  reviews: [],
  stock: 3,
  size: [],
};

export const MOCK_RECOMMENDED_PRODUCT_LIST: RecommendedProduct[] = [
  {
    id: generateRandomId(16),
    title: createRandomProductTitle(),
    price: Math.floor(Math.random() * 10000),
    imageUrl: `https://source.unsplash.com/600x400/?nature,water&sig=${Math.floor(
      Math.random() * 100
    )}`,
    selectedOption: {
      title: '',
      selectedItemLabel: { value: '', label: '선택하세요.', description: '' }.label,
      optionItems: [
        { value: '', label: '선택하세요.', description: '' },
        { value: 'option1', label: 'Option 1', description: '' },
        { value: 'option2', label: 'Option 2', description: '(+ 1,000원)' },
        { value: 'option3', label: 'Option 3', description: '' },
      ],
      handleOptionChange: () => {},
    },
  },
  {
    id: generateRandomId(16),
    title: createRandomProductTitle(),
    price: Math.floor(Math.random() * 10000),
    imageUrl: `https://source.unsplash.com/600x400/?nature,water&sig=${Math.floor(
      Math.random() * 100
    )}`,
    selectedOption: {
      title: '',
      selectedItemLabel: { value: '', label: '선택하세요.', description: '' }.label,
      optionItems: [
        { value: '', label: '선택하세요.', description: '' },
        { value: 'option1', label: 'Option 1', description: '' },
        { value: 'option2', label: 'Option 2', description: '(+ 1,000원)' },
        { value: 'option3', label: 'Option 3', description: '' },
      ],
      handleOptionChange: () => {},
    },
  },
  {
    id: generateRandomId(16),
    title: createRandomProductTitle(),
    price: Math.floor(Math.random() * 10000),
    imageUrl: `https://source.unsplash.com/600x400/?nature,water&sig=${Math.floor(
      Math.random() * 100
    )}`,
    selectedOption: {
      title: '',
      selectedItemLabel: { value: '', label: '선택하세요.', description: '' }.label,
      optionItems: [
        { value: '', label: '선택하세요.', description: '' },
        { value: 'option1', label: 'Option 1', description: '' },
        { value: 'option2', label: 'Option 2', description: '(+ 1,000원)' },
        { value: 'option3', label: 'Option 3', description: '' },
      ],
      handleOptionChange: () => {},
    },
  },
];

export const MOCK_PRODUCT_CART: ProductCart[] = [
  {
    id: generateRandomId(16),
    title: createRandomProductTitle(),
    price: Math.floor(Math.random() * 10000),
    quantity: Math.floor(Math.random() * 100),
  },
  {
    id: generateRandomId(16),
    title: createRandomProductTitle(),
    price: Math.floor(Math.random() * 10000),
    quantity: Math.floor(Math.random() * 100),
  },
  {
    id: generateRandomId(16),
    title: createRandomProductTitle(),
    price: Math.floor(Math.random() * 10000),
    quantity: Math.floor(Math.random() * 100),
  },
  {
    id: generateRandomId(16),
    title: createRandomProductTitle(),
    price: Math.floor(Math.random() * 10000),
    quantity: Math.floor(Math.random() * 100),
  },
  {
    id: generateRandomId(16),
    title: createRandomProductTitle(),
    price: Math.floor(Math.random() * 10000),
    quantity: Math.floor(Math.random() * 100),
  },
];
