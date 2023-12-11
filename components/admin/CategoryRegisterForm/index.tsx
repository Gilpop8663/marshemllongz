import React, { ChangeEvent } from 'react';
import Link from 'next/link';
import { CATEGORY_MAX_LENGTH } from '@backend/constants/category';
import { BASE_PATH } from '@backend/constants/path';
import { UseTextProps } from '@hooks/useText';
import Button from '@components/common/Button';
import Input from '@components/common/Input';
import Label from '@components/common/Label';
import { Visibility } from '../CategoryEdit';

type CategoryRegisterKind = 'register' | 'edit';
type CategoryForm = 'name' | 'description';

interface CategoryRegisterFormProps {
  formData: Record<CategoryForm, UseTextProps>;
  kind: CategoryRegisterKind;
  visibility?: {
    state: Visibility;
    onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  };
  handleRegisterClick: () => void;
}

export default function CategoryRegisterForm({
  formData,
  kind,
  visibility,
  handleRegisterClick,
}: CategoryRegisterFormProps) {
  const isEdit = kind === 'edit';
  const kindText = isEdit ? '수정' : '등록';

  return (
    <div className="flex flex-col gap-6 max-w-lg w-full">
      <span className="text-xl font-bold">카테고리 {kindText}</span>
      <Label isRequired label="카테고리 이름">
        <Input autoFocus id="name" maxLength={CATEGORY_MAX_LENGTH.NAME} {...formData.name} />
      </Label>
      <Label isRequired={false} label="카테고리 설명">
        <Input
          id="description"
          maxLength={CATEGORY_MAX_LENGTH.DESCRIPTION}
          {...formData.description}
        />
      </Label>
      {isEdit && (
        <Label isRequired label="회원에게 공개 여/부" id="isVisible">
          <div className="flex gap-4">
            <div className="flex gap-2">
              <input
                onChange={visibility?.onChange}
                type="radio"
                name="visible"
                value="visible"
                id="visible"
                checked={visibility?.state === 'visible'}
              />
              <label htmlFor="visible">공개</label>
            </div>
            <div className="flex gap-2">
              <input
                onChange={visibility?.onChange}
                type="radio"
                name="visible"
                value="hidden"
                id="hidden"
                checked={visibility?.state === 'hidden'}
              />
              <label htmlFor="hidden">비공개</label>
            </div>
          </div>
        </Label>
      )}
      <div className="flex justify-end">
        <div className="flex gap-4 w-64">
          <Link href={BASE_PATH.ADMIN} className="w-full">
            <Button color="white" text="취소" type="button" />
          </Link>
          <Button color="black" text={kindText} type="submit" onClick={handleRegisterClick} />
        </div>
      </div>
    </div>
  );
}
