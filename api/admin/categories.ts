import { postFetch } from '@utils/fetch';

interface CreateCategory {
  name: string;
  description?: string;
}

export const createCategory = async ({ name, description }: CreateCategory) => {
  await postFetch('/admin/categories', {
    name,
    description,
  });
};
