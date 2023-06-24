import React, {
  ForwardedRef,
  KeyboardEvent,
  MouseEvent,
  PropsWithChildren,
  forwardRef,
  useEffect,
} from 'react';

interface ModalProps extends React.DialogHTMLAttributes<HTMLDialogElement>, PropsWithChildren {
  zIndex?: number;
  handleModalClose: () => void;
  onAfterOpen?: () => void;
  onAfterClose?: () => void;
}

export default forwardRef(function Modal(
  { zIndex = 50, onAfterClose, handleModalClose, onAfterOpen, children }: ModalProps,
  ref: ForwardedRef<HTMLDialogElement>
) {
  const handleCloseClick = (event: MouseEvent<HTMLDialogElement>) => {
    if (!handleModalClose) return;
    const modalBoundary = event.currentTarget.getBoundingClientRect();

    if (
      modalBoundary.left > event.clientX ||
      modalBoundary.right < event.clientX ||
      modalBoundary.top > event.clientY ||
      modalBoundary.bottom < event.clientY
    ) {
      handleModalClose();
    }
  };

  const handleKeyDown = (event: KeyboardEvent<HTMLDialogElement>) => {
    event.preventDefault();

    if (event.currentTarget.open && event.key === 'Escape') {
      handleModalClose();
    }
  };

  useEffect(() => {
    if (onAfterOpen) {
      onAfterOpen();
    }
  }, [onAfterOpen]);

  useEffect(() => {
    if (onAfterClose) {
      return () => onAfterClose();
    }
  }, [onAfterClose]);

  return (
    <dialog
      ref={ref}
      onKeyDown={handleKeyDown}
      onClose={handleCloseClick}
      className={`fixed left-0 w-screen min-h-screen h-max inset-0 z-${zIndex} backdrop:bg-primaryBlack/30 transition-transform`}
      onClick={handleCloseClick}
    >
      {children}
    </dialog>
  );
});
