import { getImageUrl } from '@backend/utils/image';
import { validateProduct } from '@backend/utils/validate/product';
import prisma from '@libs/prisma/client';

interface Image {
  imageFile: File;
  imageUrl: string;
}

export interface CreateProduct {
  title: string;
  thumbnail: Image;
  additional: Image[];
  categoryId: number;
  ribonText?: string;
  caution?: string;
  description: Image[];
  ingredient?: string;
  price: number;
  isVisiblePerUnitPrice: boolean;
  cost: number;
  addOptions: {
    name: string;
    content: string;
    price: number;
    inventory: number;
  }[];
  isDiscount: boolean;
  discountPrice: number;
  isSale: boolean;
}

export const createProduct = async (product: CreateProduct) => {
  const {
    title,
    thumbnail,
    addOptions,
    categoryId,
    cost,
    description,
    discountPrice,
    isDiscount,
    isSale,
    isVisiblePerUnitPrice,
    price,
    caution,
    ingredient,
    ribonText,
    additional,
  } = product;

  validateProduct({
    title,
    addOptions,
    cost,
    description,
    discountPrice,
    price,
    caution,
    ingredient,
    ribonText,
  });

  const additionalList = await Promise.all(additional.map((item) => getImageUrl(item)));
  const descriptionList = await Promise.all(description.map((item) => getImageUrl(item)));

  return await prisma.recipeProduct.create({
    data: {
      title,
      cost,
      categoryId,
      discountPrice,
      isDiscount,
      isVisiblePerUnitPrice,
      isSale,
      price,
      caution,
      ingredient,
      ribonText,
      additional: additionalList,
      addOptions,
      description: descriptionList,
      thumbnailUrl: await getImageUrl(thumbnail),
      updatedAt: new Date(),
    },
  });
};

export interface ModifyProduct extends CreateProduct {
  id: number;
}

export const modifyProduct = async (product: ModifyProduct) => {
  const {
    id,
    title,
    thumbnail,
    addOptions,
    categoryId,
    cost,
    description,
    discountPrice,
    isDiscount,
    isSale,
    isVisiblePerUnitPrice,
    price,
    caution,
    ingredient,
    ribonText,
    additional,
  } = product;

  validateProduct({
    title,
    addOptions,
    cost,
    description,
    discountPrice,
    price,
    caution,
    ingredient,
    ribonText,
  });

  const additionalList = await Promise.all(additional.map((item) => getImageUrl(item)));
  const descriptionList = await Promise.all(description.map((item) => getImageUrl(item)));

  return await prisma.recipeProduct.update({
    where: {
      id,
    },
    data: {
      title,
      cost,
      categoryId,
      discountPrice,
      isDiscount,
      isVisiblePerUnitPrice,
      isSale,
      price,
      caution,
      ingredient,
      ribonText,
      additional: additionalList,
      addOptions,
      description: descriptionList,
      thumbnailUrl: await getImageUrl(thumbnail),
      updatedAt: new Date(),
    },
  });
};

export const getProductList = async () => {
  const productList = await prisma.recipeProduct.findMany();

  return productList.map(
    ({
      id,
      title,
      price,
      isDiscount,
      categoryId,
      thumbnailUrl,
      updatedAt,
      createdAt,
      isSale,
      discountPrice,
      cost,
      isVisiblePerUnitPrice,
    }) => ({
      id,
      title,
      price,
      isDiscount,
      categoryId,
      thumbnailUrl,
      createdAt,
      updatedAt,
      isSale,
      discountPrice,
      cost,
      isVisiblePerUnitPrice,
    })
  );
};

export const getProductDetail = async (id: number) => {
  const product = await prisma.recipeProduct.findUnique({
    where: {
      id,
    },
  });

  if (!product) {
    throw new Error('찾는 제품이 없습니다.');
  }

  return product;
};
