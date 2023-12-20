import { validateCategory } from '@backend/utils/validate';
import prisma from '@libs/prisma/client';

export const getAdminCategoryList = async () => {
  const categoryList = await prisma.recipeCategory.findMany();

  return categoryList.map((category) => ({ ...category, quantity: 0 }));
};

export interface CreateCategory {
  name: string;
  description?: string;
}

export const createCategory = async ({ name, description }: CreateCategory) => {
  validateCategory({ name, description });

  return await prisma.recipeCategory.create({ data: { name, description } });
};

export interface ModifyCategory {
  id: number;
  name: string;
  description?: string;
  isVisible: boolean;
}

export const modifyCategory = async ({ id, name, description, isVisible }: ModifyCategory) => {
  validateCategory({ name, description });

  return await prisma.recipeCategory.update({
    where: { id },
    data: { description, isVisible, name },
  });
};
