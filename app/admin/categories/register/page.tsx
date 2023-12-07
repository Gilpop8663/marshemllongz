'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import { CATEGORY_MAX_LENGTH } from '@backend/constants/category';
import { PATH } from '@backend/constants/path';
import { createCategory } from 'api/admin/categories';
import { useText } from '@hooks/useText';
import CategoryRegisterForm from '@components/admin/CategoryRegisterForm';

export default function CategoryRegister() {
  const name = useText('', CATEGORY_MAX_LENGTH.NAME);
  const description = useText('', CATEGORY_MAX_LENGTH.DESCRIPTION);
  const { push } = useRouter();

  const handleRegisterClick = async () => {
    await createCategory({ name: name.value, description: description.value });

    push(PATH.ADMIN);
  };

  return (
    <div className="flex justify-center">
      <CategoryRegisterForm
        kind="register"
        formData={{ name, description }}
        handleRegisterClick={handleRegisterClick}
      />
    </div>
  );
}
