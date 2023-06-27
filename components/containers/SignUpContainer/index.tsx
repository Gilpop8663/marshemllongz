import React from 'react';
import SignUpForm from '@components/user/SignUpForm';

export default function SignUpContainer() {
  return (
    <div className="max-w-screen-sm mx-auto text-primaryBlack">
      <h3 className="font-medium text-lg mb-8">회원 가입</h3>
      <SignUpForm />
    </div>
  );
}
