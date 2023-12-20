import React from 'react';
import { getCategoryDetail } from 'api/categories';
import CategoryEdit from '@components/admin/CategoryEdit';

export default async function CategoryEditPage({ params }: { params: { slug: string } }) {
  const data = await getCategoryDetail(Number(params.slug));

  return (
    <div className="flex justify-center">
      <CategoryEdit categoryDetail={data} />
    </div>
  );
}
