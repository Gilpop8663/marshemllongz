import React from 'react';

interface CartOrderCardProps {
  label: string;
  value: string;
  fontSize?: 'sm' | 'base' | 'lg';
}

export default function CartOrderCard({ label, value, fontSize = 'sm' }: CartOrderCardProps) {
  return (
    <div className={`flex justify-between items-center text-${fontSize} text-primaryBlack`}>
      <span>{label}</span>
      <span>{value}</span>
    </div>
  );
}
