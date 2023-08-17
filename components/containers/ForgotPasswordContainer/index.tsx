import React from 'react';
import UserAccountPageLayout from '@components/layout/UserAccountPageLayout';
import ForgotPasswordForm from '@components/user/ForgotPasswordForm';

export default function ForgotPasswordContainer() {
  return (
    <UserAccountPageLayout title="비밀번호 찾기">
      <ForgotPasswordForm />
    </UserAccountPageLayout>
  );
}
