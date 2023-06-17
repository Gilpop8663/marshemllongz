type ProductCategory = 'new' | 'best';

interface ProductItemPreview {
  id: string;
  imageUrl: string;
  hoverImageUrl: string;
  title: string;
  price: number;
  category?: ProductCategory;
  discountPercent?: number;
}

interface ProductItem {
  imageUrlItems: string[];
  title: string;
  price: number;
  discountPercent?: number;
  size: ItemSize[];
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
