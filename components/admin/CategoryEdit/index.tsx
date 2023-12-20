'use client';

import React from 'react';
import { useParams, useRouter } from 'next/navigation';
import { CATEGORY_MAX_LENGTH } from '@backend/constants/category';
import { PATH } from '@backend/constants/path';
import { modifyCategory } from 'api/admin/categories';
import { RecipeCategory } from '@prisma/client';
import { useRadio } from '@hooks/useRadio';
import { useText } from '@hooks/useText';
import CategoryRegisterForm from '@components/admin/CategoryRegisterForm';

interface Props {
  categoryDetail: RecipeCategory;
}

export type Visibility = 'visible' | 'hidden';

export default function CategoryEdit({ categoryDetail }: Props) {
  const params = useParams<{ slug: string }>();
  const name = useText(categoryDetail?.name, CATEGORY_MAX_LENGTH.NAME);
  const description = useText(categoryDetail?.description ?? '', CATEGORY_MAX_LENGTH.DESCRIPTION);
  const visibility = useRadio<Visibility>(categoryDetail?.isVisible ? 'visible' : 'hidden');
  const { push } = useRouter();

  const handleRegisterClick = async () => {
    const isVisible = visibility.state === 'visible';

    await modifyCategory({
      id: Number(params?.slug),
      name: name.value,
      description: description.value,
      isVisible,
    });

    push(PATH.ADMIN);
  };

  return (
    <div className="flex justify-center">
      <CategoryRegisterForm
        kind="edit"
        formData={{
          name,
          description,
        }}
        visibility={visibility}
        handleRegisterClick={handleRegisterClick}
      />
    </div>
  );
}
