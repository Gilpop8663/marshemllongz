import React from 'react';

interface ProductUniversalCardProps {
  title: string;
  content: string;
}

export default function ProductUniversalCard({ title, content }: ProductUniversalCardProps) {
  return (
    <div className="flex justify-between">
      <span className="text-xs font-medium">{title}</span>
      <span className="text-xs">{content}</span>
    </div>
  );
}
