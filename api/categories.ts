import { RecipeCategory } from '@prisma/client';
import { getFetch } from '@utils/fetch';

interface Category {
  id: number;
  name: string;
  description?: string;
  quantity: number;
}

const BASE_URL = process.env.NEXT_PUBLIC_ENV_BASE_URL;

export const getCategoryList = async () => {
  return await getFetch<Category[]>('/categories', { cache: 'no-store' });
};

export const getCategoryDetail = async (categoryId: number) => {
  return await getFetch<RecipeCategory>(`${BASE_URL}/api/categories/${categoryId}`, {
    cache: 'no-store',
  });
};
