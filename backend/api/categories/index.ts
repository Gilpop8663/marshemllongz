import prisma from '@libs/prisma/client';

export const getCategoryList = async () => {
  return await prisma.recipeCategory.findMany();
};
