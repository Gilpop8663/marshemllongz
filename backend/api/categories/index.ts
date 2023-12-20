import { RecipeCategory } from '@prisma/client';
import prisma from '@libs/prisma/client';

const transformCategoryResponse = (category: RecipeCategory) => {
  return {
    id: category.id,
    name: category.name,
    description: category.description,
    quantity: 0,
  };
};

export const getCategoryList = async () => {
  const categoryList = await prisma.recipeCategory.findMany({
    where: {
      isVisible: true,
    },
  });

  return categoryList.map((category) => transformCategoryResponse(category));
};

export const getCategoryDetail = async (id: number) => {
  const category = await prisma.recipeCategory.findUnique({
    where: {
      id,
    },
  });

  if (!category) {
    throw new Error('찾는 카테고리가 없습니다.');
  }

  return category;
};
