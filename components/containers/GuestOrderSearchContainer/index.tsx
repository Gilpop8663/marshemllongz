import React from 'react';
import UserAccountPageLayout from '@components/layout/UserAccountPageLayout';
import GuestOrderSearchForm from '@components/user/GuestOrderSearchForm';

export default function GuestOrderSearchContainer() {
  return (
    <UserAccountPageLayout title="비회원 주문 조회">
      <GuestOrderSearchForm />
    </UserAccountPageLayout>
  );
}
