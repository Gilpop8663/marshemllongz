import React from 'react';

interface ProductUniversalCardProps {
  title: string;
  content: string;
}

export default function ProductUniversalCard({ title, content }: ProductUniversalCardProps) {
  return (
    <div className="flex justify-between">
      <span className="text-sm font-medium">{title}</span>
      <span className="text-sm">{content}</span>
    </div>
  );
}
