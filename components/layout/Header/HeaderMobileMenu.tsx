import React from 'react';
import SearchBar from '@components/common/SearchBar';
import UserIcon from '@components/icons/UserIcon';
import HeaderMobileCategory from './HeaderMobileCategory';

export default function HeaderMobileMenu() {
  return (
    <div className="relative w-full min-h-screen h-max">
      <div className="bg-primaryWhite w-full p-6 py-8 scrollbar-hide">
        <div className="flex justify-between">
          <div>마시멜롱즈</div>
          <UserIcon size={6} />
        </div>
        <div className="mt-4">
          <SearchBar />
        </div>
        <div className="flex flex-col gap-8 py-16">
          <HeaderMobileCategory
            initialActive={true}
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
          <HeaderMobileCategory
            initialActive={true}
            title="COMMUNITY"
            categories={['공지사항', '언론보도', 'Q&A', '배경화면', '베스트리뷰어']}
          />
          <HeaderMobileCategory
            initialActive={true}
            title="ABOUT"
            categories={['브랜드', '캐릭터', '콜라보레이션', 'Contact']}
          />
        </div>
      </div>
    </div>
  );
}
