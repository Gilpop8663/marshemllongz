import React from 'react';
import UserAccountPageLayout from '@components/layout/UserAccountPageLayout';
import SignUpForm from '@components/user/SignUpForm';

export default function SignUpContainer() {
  return (
    <UserAccountPageLayout title="회원 가입">
      <SignUpForm />
    </UserAccountPageLayout>
  );
}
