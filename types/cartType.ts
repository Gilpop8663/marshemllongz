import { ProductOptionType } from './productType';

export interface CartType {
  id: string;
  title: string;
  price: number;
  imageUrl: string;
  optionKind: ProductOptionType;
  option: string;
  quantity: number;
}
