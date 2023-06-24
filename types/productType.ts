import { SelectProps } from '@components/common/Select';

type ProductCategory = 'new' | 'best';

type ProductOptionType = 'design' | 'size';

export interface ProductItemPreview {
  id: string;
  imageUrl: string;
  hoverImageUrl: string;
  title: string;
  price: number;
  category?: ProductCategory;
  discountPercent?: number;
}

export interface ProductItem {
  id: string;
  title: string;
  price: number;
  optionName: ProductOptionType;
  options: ProductOption[];
  rating: number;
  discountPercent?: number;
  imageList: ProductImage[];
  stock: number;
  reviews: Review[];
}

interface ProductOption {
  value: string;
  label: string;
  description: string;
}

type ReviewCategory = 'normal' | 'best';

export interface Review {
  id: string;
  name: string;
  category: ReviewCategory;
  score: number;
  content: string;
  date?: Date;
  imageList?: string[];
}

export interface ProductImage {
  name: string;
  url: string;
}

export interface RecommendedProduct {
  id: string;
  title: string;
  price: number;
  imageUrl: string;
  selectedOption: SelectProps;
}

export interface ProductCart {
  id: string;
  title: string;
  price: number;
  quantity: number;
}
