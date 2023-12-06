import { validateCategory } from '@backend/utils/validate';
import prisma from '@libs/prisma/client';

interface CreateCategory {
  name: string;
  description?: string;
}

export const createCategory = async ({ name, description }: CreateCategory) => {
  validateCategory({ name, description });

  return await prisma.recipeCategory.create({ data: { name, description } });
};

interface ModifyCategory {
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
