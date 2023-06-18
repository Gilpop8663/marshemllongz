import React from 'react';
import Image from 'next/image';
import { ProductImage } from '@type/productType';

interface ProductImageListProps {
  imageList: ProductImage[];
}

export default function ProductImageList({ imageList }: ProductImageListProps) {
  return (
    <div className="flex flex-wrap justify-center w-full gap-2 md:gap-4">
      {imageList.map((image) => (
        <div key={image.url} className="relative w-16 h-16 md:w-24 md:h-24 cursor-pointer">
          <Image src={image.url} alt={image.name} fill={true} className="object-cover" />
        </div>
      ))}
    </div>
  );
}
