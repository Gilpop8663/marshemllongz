import { postFetch } from '@utils/fetch';

interface CreateCategory {
  name: string;
  description?: string;
}

export const createCategory = async ({ name, description }: CreateCategory) => {
  await postFetch<CreateCategory>('/admin/categories', {
    name,
    description,
  });
};
