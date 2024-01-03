import { CreateProduct } from '@backend/api/admin/products';
import { PRODUCT_ERROR_MESSAGE, PRODUCT_MAX_LENGTH } from '@backend/constants/product';

interface ValidateProduct {
  title: string;
  description: CreateProduct['description'];
  ribonText?: string;
  ingredient?: string;
  caution?: string;
  cost: number;
  price: number;
  addOptions: CreateProduct['addOptions'];
  discountPrice: number;
}

const validatePrice = (price: number) => {
  if (!Number.isInteger(price)) {
    throw new Error(PRODUCT_ERROR_MESSAGE.INTEGER);
  }

  if (price <= 0) {
    throw new Error(PRODUCT_ERROR_MESSAGE.PRICE);
  }
};

export const validateProduct = ({
  title,
  description,
  ingredient = '',
  ribonText = '',
  addOptions,
  cost,
  discountPrice,
  price,
  caution = '',
}: ValidateProduct) => {
  if (title.length > PRODUCT_MAX_LENGTH.TITLE) {
    throw new Error(PRODUCT_ERROR_MESSAGE.TITLE);
  }

  if (description.length > PRODUCT_MAX_LENGTH.DESCRIPTION) {
    throw new Error(PRODUCT_ERROR_MESSAGE.DESCRIPTION);
  }

  if (ingredient.length > PRODUCT_MAX_LENGTH.INGREDIENT) {
    throw new Error(PRODUCT_ERROR_MESSAGE.INGREDIENT);
  }

  if (ribonText.length > PRODUCT_MAX_LENGTH.RIBON_TEXT) {
    throw new Error(PRODUCT_ERROR_MESSAGE.RIBON_TEXT);
  }

  if (caution.length > PRODUCT_MAX_LENGTH.CAUTION) {
    throw new Error(PRODUCT_ERROR_MESSAGE.CAUTION);
  }

  validatePrice(cost);
  validatePrice(price);
  validatePrice(discountPrice);

  addOptions.forEach((addOption) => {
    if (addOption.content.length > PRODUCT_MAX_LENGTH.OPTION_CONTENT) {
      throw new Error(PRODUCT_ERROR_MESSAGE.OPTION_CONTENT);
    }

    if (addOption.name.length > PRODUCT_MAX_LENGTH.OPTION_CONTENT) {
      throw new Error(PRODUCT_ERROR_MESSAGE.OPTION_CONTENT);
    }

    if (!Number.isInteger(addOption.inventory)) {
      throw new Error(PRODUCT_ERROR_MESSAGE.INTEGER);
    }

    if (addOption.inventory < 0) {
      throw new Error(PRODUCT_ERROR_MESSAGE.OPTION_CONTENT);
    }

    validatePrice(addOption.price);
  });
};
