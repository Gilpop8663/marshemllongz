import { CreateCategory, ModifyCategory } from '@backend/api/admin/category';
import { postFetch, putFetch } from '@utils/fetch';

const BASE_URL = process.env.NEXT_PUBLIC_ENV_BASE_URL;

export const createCategory = async ({ name, description }: CreateCategory) => {
  await postFetch<CreateCategory>(`${BASE_URL}/api/admin/categories`, {
    name,
    description,
  });
};

export const modifyCategory = async ({ id, name, description, isVisible }: ModifyCategory) => {
  await putFetch<ModifyCategory>(`${BASE_URL}/api/admin/categories/${id}`, {
    id,
    isVisible,
    name,
    description,
  });
};
