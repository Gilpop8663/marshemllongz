import React from 'react';
import Button from '@components/common/Button';
import Input from '@components/common/Input';
import Label from '@components/common/Label';

export default function LoginForm() {
  return (
    <form>
      <div className="flex flex-col gap-4">
        <Label htmlFor="userId" isRequired label="아이디 또는 이메일">
          <Input id="userId" required />
        </Label>
        <Label htmlFor="userPassword" isRequired label="비밀번호">
          <Input id="userPassword" required type="password" />
        </Label>
      </div>
      <div className="mt-4 flex justify-center text-sm">
        <button type="button" className="mr-8">
          비밀번호 찾기
        </button>
        <button type="button">비회원 주문 조회하기</button>
      </div>
      <div className="mt-4 gap-4 flex flex-col">
        <Button color="black" text="로그인하기" />
        <Button type="button" color="white" text="회원 가입하기" />
      </div>
    </form>
  );
}
