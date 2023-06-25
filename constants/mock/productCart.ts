import { createRandomProductTitle, generateRandomId } from '@utils/mock';
import { ProductCart } from '@type/productType';

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
