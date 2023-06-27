import React from 'react';
import Button from '@components/common/Button';
import Input from '@components/common/Input';

export default function LoginContainer() {
  return (
    <div className="text-primaryBlack">
      <h3 className="font-medium text-lg mb-8">로그인</h3>
      <div className="flex flex-col gap-4">
        <Input id="userId" label="아이디 또는 이메일" />
        <Input id="userPassword" label="비밀번호" type="password" />
      </div>
      <div className="mt-4 flex justify-center text-sm">
        <button className="mr-8">비밀번호 찾기</button>
        <button>비회원 주문 조회하기</button>
      </div>
      <div className="mt-4 gap-4 flex flex-col">
        <Button color="black" text="로그인하기" />
        <Button color="white" text="회원 가입하기" />
      </div>
    </div>
  );
}
