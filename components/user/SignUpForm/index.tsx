import React from 'react';
import Button from '@components/common/Button';
import Input from '@components/common/Input';
import Label from '@components/common/Label';
import SignUpCheckBoxes from '../SignUpCheckBoxes';

export default function SignUpForm() {
  return (
    <form action="" className="flex flex-col gap-4">
      <Label htmlFor="userId" isRequired label="아이디">
        <Input id="userId" required placeholder="영문, 숫자 5자 이상 입력해주세요." />
      </Label>
      <Label htmlFor="userEmail" isRequired label="이메일">
        <Input id="userEmail" required type="email" />
      </Label>
      <Label htmlFor="userName" isRequired label="이름">
        <Input id="userName" required />
      </Label>
      <Label htmlFor="userPassword" isRequired label="비밀번호">
        <Input id="userPassword" required placeholder="6자 이상 입력해주세요." type="password" />
      </Label>
      <Label htmlFor="userPasswordCheck" isRequired label="비밀번호">
        <Input id="userPasswordCheck" required type="password" />
      </Label>
      <Label htmlFor="userPhone" isRequired label="휴대폰 번호">
        <div className="flex justify-between items-center">
          <Input id="userPhone" required />
          <span className="px-2">-</span>
          <Input required />
          <span className="px-2">-</span>
          <Input required />
        </div>
      </Label>
      <Label htmlFor="userPostalCode" isRequired label="우편번호">
        <div className="flex justify-between">
          <Input id="userPostalCode" required />
          <div className="w-36 ml-4">
            <Button color="white" text="검색하기" />
          </div>
        </div>
      </Label>
      <Label htmlFor="userAddress" isRequired label="주소">
        <div className="flex flex-col gap-3">
          <Input required />
          <Input id="userAddress" required />
        </div>
      </Label>
      <SignUpCheckBoxes />
      <div className="py-2">
        <Button color="black" text="가입하기" />
      </div>
    </form>
  );
}
