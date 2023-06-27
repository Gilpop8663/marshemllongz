import React, { PropsWithChildren } from 'react';

interface UserAccountPageLayoutProps extends PropsWithChildren {
  title: string;
}

export default function UserAccountPageLayout({ title, children }: UserAccountPageLayoutProps) {
  return (
    <div className="max-w-screen-sm mx-auto text-primaryBlack">
      <h3 className="font-medium text-lg mb-8">{title}</h3>
      {children}
    </div>
  );
}
