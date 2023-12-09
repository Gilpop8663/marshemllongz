import { RecipeCategory } from '@prisma/client';
import { getFetch } from '@utils/fetch';

interface Category {
  id: number;
  name: string;
  description?: string;
  quantity: number;
}

export const getCategoryList = async () => {
  return await getFetch<Category[]>('/categories', { cache: 'no-store' });
};

export const getCategoryDetail = async (categoryId: number) => {
  return await getFetch<RecipeCategory>(`/categories/${categoryId}`, { cache: 'no-store' });
};
