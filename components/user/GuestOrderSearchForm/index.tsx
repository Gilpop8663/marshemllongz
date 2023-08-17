import React from 'react';
import Button from '@components/common/Button';
import Input from '@components/common/Input';
import Label from '@components/common/Label';

interface GuestOrderSearchFormProps {
  errorMessage?: string;
}

export default function GuestOrderSearchForm({ errorMessage }: GuestOrderSearchFormProps) {
  return (
    <form className="flex flex-col gap-4">
      <Label label="이름" htmlFor="userName" isRequired>
        <Input required />
      </Label>
      <Label label="주문번호" htmlFor="userEmail" isRequired>
        <Input required type="email" />
      </Label>
      <span className="text-sm text-center">{errorMessage}</span>
      <Button color="black" text="조회하기" />
    </form>
  );
}
