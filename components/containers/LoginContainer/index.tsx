import React from 'react';
import UserAccountPageLayout from '@components/layout/UserAccountPageLayout';
import LoginForm from '@components/user/LoginForm';

export default function LoginContainer() {
  return (
    <UserAccountPageLayout title="로그인">
      <LoginForm />
    </UserAccountPageLayout>
  );
}
