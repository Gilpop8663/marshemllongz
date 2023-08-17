import React, { useState } from 'react';
import CartIcon from '@components/icons/CartIcon';
import UserIcon from '@components/icons/UserIcon';
import HeaderCategory from './HeaderCategory';
import HeaderSearch from './HeaderSearch';

interface HeaderDesktopProps {
  cartQuantity: number;
}

export default function HeaderDesktop({ cartQuantity }: HeaderDesktopProps) {
  const [isSearchActive, setIsSearchActive] = useState(false);

  const handleSearchClick = () => {
    setIsSearchActive((prev) => !prev);
  };

  return (
    <div className="justify-between fixed bg-primaryWhite/80 w-screen items-center px-3 sm:px-6 md:px-12 lg:px-24 xl:px-32 border-b-[1px] border-primaryBlack hidden sm:flex sm:py-6 left-0 top-0 text-primaryBlack">
      <div className="flex gap-12 items-center">
        <div className="flex text-xl font-medium cursor-pointer">Mashmellongz</div>
        <div className="gap-6 text-xs font-medium flex">
          <HeaderCategory
            title="SHOP"
            categories={[
              '노트북/태블릿 파우치',
              '토이/인형',
              '키링',
              '스티커',
              '슬리퍼',
              '여행, 패키지',
              '패브릭/생활',
              'ALL',
            ]}
          />
          <HeaderCategory
            title="COMMUNITY"
            categories={['공지사항', '언론보도', 'Q&A', '배경화면', '베스트리뷰어']}
          />
          <HeaderCategory
            title="ABOUT"
            categories={['브랜드', '캐릭터', '콜라보레이션', 'Contact']}
          />
        </div>
      </div>
      <div className="flex gap-6">
        <HeaderSearch handleSearchClick={handleSearchClick} isSearchActive={isSearchActive} />
        {!isSearchActive && (
          <>
            <UserIcon size={4} />
            <div className="flex cursor-pointer gap-2 hover:text-darkGray">
              <CartIcon size={4} />
              <span className="text-xs">{cartQuantity}</span>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
