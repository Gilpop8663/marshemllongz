import { CATEGORY_ERROR_MESSAGE, CATEGORY_MAX_LENGTH } from '@backend/constants/category';

interface ValidateCategory {
  name: string;
  description?: string;
}

export const validateCategory = ({ name, description = '' }: ValidateCategory) => {
  if (name.length > CATEGORY_MAX_LENGTH.NAME) {
    throw new Error(CATEGORY_ERROR_MESSAGE.NAME);
  }

  if (description.length > CATEGORY_MAX_LENGTH.DESCRIPTION) {
    throw new Error(CATEGORY_ERROR_MESSAGE.DESCRIPTION);
  }
};
