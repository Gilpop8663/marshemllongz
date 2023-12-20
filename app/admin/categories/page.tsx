import React from 'react';
import Link from 'next/link';
import { PATH } from '@backend/constants/path';
import { getAdminCategoryList } from 'api/admin/categories';
import Button from '@components/common/Button';
import Table from '@components/common/Table';

type CategoryKey = 'id' | 'name' | 'description' | 'quantity' | 'edit' | 'isVisible';

export default async function AdminPage() {
  const categoryList = await getAdminCategoryList();
  const categoryTableItemList = categoryList.map((category) => ({
    ...category,
    isVisible: category.isVisible ? '공개' : '비공개',
    edit: (
      <Link href={`${PATH.ADMIN}/categories/${category.id}`}>
        <Button color="black" text="수정" />
      </Link>
    ),
  }));

  return (
    <div>
      <h1 className="text-xl font-semibold text-center">카테고리 목록</h1>

      <div className="flex justify-end py-6">
        <div className="w-52">
          <Link href={`${PATH.ADMIN_CATEGORY_REGISTER}`}>
            <Button text="카테고리 등록하기" color="black" />
          </Link>
        </div>
      </div>
      <Table<CategoryKey>
        itemList={categoryTableItemList}
        labelList={[
          { label: '번호', gridFractionalUnit: 1, value: 'id' },
          { label: '이름', gridFractionalUnit: 1, value: 'name' },
          { label: '설명', gridFractionalUnit: 2, value: 'description' },
          { label: '카테고리 아이템 개수', gridFractionalUnit: 1, value: 'quantity' },
          { label: '공개/비공개', gridFractionalUnit: 1, value: 'isVisible' },
          { label: '수정', gridFractionalUnit: 1, value: 'edit' },
        ]}
      />
    </div>
  );
}
