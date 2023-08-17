import React, { useEffect, useRef, useState } from 'react';
import Modal from '@components/common/Modal';
import CartIcon from '@components/icons/CartIcon';
import MenuIcon from '@components/icons/MenuIcon';
import HeaderMobileMenu from './HeaderMobileMenu';

interface HeaderMobileProps {
  cartQuantity: number;
}

export default function HeaderMobile({ cartQuantity }: HeaderMobileProps) {
  const dialogRef = useRef<HTMLDialogElement>(null);

  const handleMenuOpenClick = () => {
    if (!dialogRef.current) return;

    dialogRef.current.showModal();
    dialogRef.current.style.transform = 'translateX(0)';
  };

  const handleMenuClose = async () => {
    if (!dialogRef.current) return;
    dialogRef.current.style.transform = 'translateX(-100%)';

    setTimeout(() => {
      if (!dialogRef.current) return;

      dialogRef.current.close();
    }, 300);
  };

  useEffect(() => {
    if (!dialogRef.current) return;

    dialogRef.current.style.transform = 'translateX(-100%)';
    dialogRef.current.classList.add('scrollbar-hide');
  }, []);

  return (
    <div className="flex justify-between fixed bg-primaryWhite/80 w-screen items-center px-3 sm:px-6 md:px-12 lg:px-24 xl:px-32 border-b-[1px] border-primaryBlack py-2 left-0 top-0 text-primaryBlack sm:hidden">
      <MenuIcon size={6} onClick={handleMenuOpenClick} />
      <div className="text-xl font-medium cursor-pointer">Mashmellongz</div>
      <div className="cursor-pointer  flex items-center gap-2 hover:text-darkGray">
        <CartIcon size={6} />
        <span className="text-xs">{cartQuantity}</span>
      </div>
      <Modal ref={dialogRef} handleModalClose={handleMenuClose} aria-label="메뉴 창">
        <HeaderMobileMenu />
      </Modal>
    </div>
  );
}
