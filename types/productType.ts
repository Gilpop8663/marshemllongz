import { SelectProps } from '@components/common/Select';

type ProductCategory = 'new' | 'best';

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
  size: ItemSize[];
  discountPercent?: number;
  imageList: ProductImage[];
  stock: number;
  reviews: Review[];
}

interface ItemSize {
  value: string;
  label: string;
  description: string;
}

type ReviewCategory = 'normal' | 'best';

interface Review {
  category: ReviewCategory;
  score: number;
  content: string;
  date?: Date;
  imageUrl?: string;
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
