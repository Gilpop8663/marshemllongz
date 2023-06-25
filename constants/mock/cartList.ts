import { createRandomProductTitle, generateRandomId } from '@utils/mock';
import { CartType } from '@type/cartType';

export const MOCK_CART_LIST: CartType[] = [
  {
    id: generateRandomId(16),
    title: createRandomProductTitle(),
    imageUrl: `https://source.unsplash.com/600x400/?nature,water&sig=${Math.floor(
      Math.random() * 100
    )}`,
    optionKind: 'design',
    option: createRandomProductTitle(),
    price: Math.floor(Math.random() * 100000),
    quantity: Math.floor(Math.random() * 100),
  },
  {
    id: generateRandomId(16),
    title: createRandomProductTitle(),
    imageUrl: `https://source.unsplash.com/600x400/?nature,water&sig=${Math.floor(
      Math.random() * 100
    )}`,
    optionKind: 'size',
    option: createRandomProductTitle(),
    price: Math.floor(Math.random() * 100000),
    quantity: Math.floor(Math.random() * 100),
  },
  {
    id: generateRandomId(16),
    title: createRandomProductTitle(),
    imageUrl: `https://source.unsplash.com/600x400/?nature,water&sig=${Math.floor(
      Math.random() * 100
    )}`,
    optionKind: 'design',
    option: createRandomProductTitle(),
    price: Math.floor(Math.random() * 100000),
    quantity: Math.floor(Math.random() * 100),
  },
  {
    id: generateRandomId(16),
    title: createRandomProductTitle(),
    imageUrl: `https://source.unsplash.com/600x400/?nature,water&sig=${Math.floor(
      Math.random() * 100
    )}`,
    optionKind: 'size',
    option: createRandomProductTitle(),
    price: Math.floor(Math.random() * 100000),
    quantity: Math.floor(Math.random() * 100),
  },
  {
    id: generateRandomId(16),
    title: createRandomProductTitle(),
    imageUrl: `https://source.unsplash.com/600x400/?nature,water&sig=${Math.floor(
      Math.random() * 100
    )}`,
    optionKind: 'design',
    option: createRandomProductTitle(),
    price: Math.floor(Math.random() * 100000),
    quantity: Math.floor(Math.random() * 100),
  },
  {
    id: generateRandomId(16),
    title: createRandomProductTitle(),
    imageUrl: `https://source.unsplash.com/600x400/?nature,water&sig=${Math.floor(
      Math.random() * 100
    )}`,
    optionKind: 'size',
    option: createRandomProductTitle(),
    price: Math.floor(Math.random() * 100000),
    quantity: Math.floor(Math.random() * 100),
  },
  {
    id: generateRandomId(16),
    title: createRandomProductTitle(),
    imageUrl: `https://source.unsplash.com/600x400/?nature,water&sig=${Math.floor(
      Math.random() * 100
    )}`,
    optionKind: 'design',
    option: createRandomProductTitle(),
    price: Math.floor(Math.random() * 100000),
    quantity: Math.floor(Math.random() * 100),
  },
  {
    id: generateRandomId(16),
    title: createRandomProductTitle(),
    imageUrl: `https://source.unsplash.com/600x400/?nature,water&sig=${Math.floor(
      Math.random() * 100
    )}`,
    optionKind: 'size',
    option: createRandomProductTitle(),
    price: Math.floor(Math.random() * 100000),
    quantity: Math.floor(Math.random() * 100),
  },
  {
    id: generateRandomId(16),
    title: createRandomProductTitle(),
    imageUrl: `https://source.unsplash.com/600x400/?nature,water&sig=${Math.floor(
      Math.random() * 100
    )}`,
    optionKind: 'design',
    option: createRandomProductTitle(),
    price: Math.floor(Math.random() * 100000),
    quantity: Math.floor(Math.random() * 100),
  },
  {
    id: generateRandomId(16),
    title: createRandomProductTitle(),
    imageUrl: `https://source.unsplash.com/600x400/?nature,water&sig=${Math.floor(
      Math.random() * 100
    )}`,
    optionKind: 'size',
    option: createRandomProductTitle(),
    price: Math.floor(Math.random() * 100000),
    quantity: Math.floor(Math.random() * 100),
  },
];
