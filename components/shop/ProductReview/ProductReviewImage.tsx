import React from 'react';
import Image from 'next/image';

interface ProductReviewImageProps {
  isActive: boolean;
  imageList: string[];
}

export default function ProductReviewImage({ isActive, imageList }: ProductReviewImageProps) {
  if (isActive) {
    return (
      <div className="flex flex-col gap-6">
        {imageList.map((imageUrl) => (
          <div key={imageUrl} className="relative w-1/2 aspect-square">
            <Image src={imageUrl} alt={imageUrl} fill className="object-cover" />
          </div>
        ))}
      </div>
    );
  }

  return (
    <div className="relative w-24 h-24">
      <Image src={imageList[0]} alt={imageList[0]} fill className="object-cover" />
    </div>
  );
}
