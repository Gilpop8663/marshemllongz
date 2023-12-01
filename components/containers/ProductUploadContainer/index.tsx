import React from 'react';
import UserAccountPageLayout from '@components/layout/UserAccountPageLayout';
import ProductForm from '@components/shop/ProductForm';

export default function ProductUploadContainer() {
  return (
    <UserAccountPageLayout title="운영자 게시글 업로드">
      <ProductForm />
    </UserAccountPageLayout>
  );
}
