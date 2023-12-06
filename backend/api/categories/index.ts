import prisma from '@libs/prisma/client';

export const getCategoryList = async () => {
  const categoryList = await prisma.recipeCategory.findMany({
    where: {
      isVisible: true,
    },
  });

  return categoryList.map((category) => ({
    id: category.id,
    name: category.name,
    description: category.description,
    quantity: 0,
  }));
};
