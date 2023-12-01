import { createRandomProductTitle, generateRandomId } from '@utils/mock';
import { RecommendedProduct } from '@type/productType';

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
