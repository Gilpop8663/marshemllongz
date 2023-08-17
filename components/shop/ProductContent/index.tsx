import React from 'react';
import Image from 'next/image';

interface ProductContentProps {
  title: string;
  contentList: string[];
}

export default function ProductContent({ title, contentList }: ProductContentProps) {
  const tags = contentList.map((content, index) => {
    if (content.slice(0, 4) === 'http') {
      return (
        <div key={content + index} className="relative w-full aspect-square">
          <Image src={content} fill alt={`${title} 사진`} className="object-cover" />
        </div>
      );
    }

    return <p key={content + index}>{content}</p>;
  });

  return <div className="whitespace-pre-wrap">{tags}</div>;
}
