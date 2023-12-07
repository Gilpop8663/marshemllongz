import React from 'react';
import Link from 'next/link';
import { CATEGORY_MAX_LENGTH } from '@backend/constants/category';
import { BASE_PATH } from '@backend/constants/path';
import Button from '@components/common/Button';
import Input from '@components/common/Input';
import Label from '@components/common/Label';

interface CategoryRegisterFormProps {
  kind: 'register' | 'edit';
  handleRegisterClick: () => void;
}

export default function CategoryRegisterForm({
  kind,
  handleRegisterClick,
}: CategoryRegisterFormProps) {
  const isEdit = kind === 'edit';
  const title = isEdit ? '카테고리 수정' : '카테고리 등록';

  return (
    <form className="flex flex-col gap-6">
      <span>{title}</span>
      <Label isRequired label="카테고리 이름">
        <Input id="name" maxLength={CATEGORY_MAX_LENGTH.NAME} />
      </Label>
      <Label isRequired={false} label="카테고리 설명">
        <Input id="description" maxLength={CATEGORY_MAX_LENGTH.DESCRIPTION} />
      </Label>
      {isEdit && (
        <Label isRequired label="회원에게 공개 여/부" id="isVisible">
          <div className="flex gap-4">
            <div className="flex gap-2">
              <input type="radio" name="visible" value="visible" id="visible" />
              <label htmlFor="visible">공개</label>
            </div>
            <div className="flex gap-2">
              <input type="radio" name="visible" value="hidden" id="hidden" />
              <label htmlFor="hidden">비공개</label>
            </div>
          </div>
        </Label>
      )}
      <div className="flex justify-end">
        <div className="flex gap-4 w-64">
          <Link href={BASE_PATH.ADMIN} className="w-full">
            <Button color="white" text="취소" />
          </Link>
          <Button color="black" text="등록" onClick={handleRegisterClick} />
        </div>
      </div>
    </form>
  );
}
