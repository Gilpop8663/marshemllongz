import React from 'react';
import Button from '@components/common/Button';
import Select from '@components/common/Select';
import PhotoIcon from '@components/icons/PhotoIcon';

interface ReviewFormProps {
  orderStatus: 'guest' | 'orderedByUser' | 'notOrderedByUser';
}

export default function ReviewForm({ orderStatus }: ReviewFormProps) {
  const getTextAreaMessage = () => {
    if (orderStatus === 'guest') {
      return '로그인이 필요합니다.';
    }

    if (orderStatus === 'notOrderedByUser') {
      return '구매 후 상품을 받은 이후에 작성 가능합니다.';
    }

    return '';
  };

  const getDisabledWriteReview = () => {
    if (orderStatus === 'orderedByUser') {
      return false;
    }

    return true;
  };

  return (
    <form className="border border-primaryBlack p-4 flex flex-col">
      <textarea className="h-48 mb-3">{getTextAreaMessage()}</textarea>
      <div className="grid grid-cols-1 sm:grid-cols-2 items-end">
        <div>
          <PhotoIcon
            type="button"
            title="사진 업로드"
            className="text-primaryWhite p-5 bg-darkGray rounded-full my-2 sm:my-0"
            size={6}
          />
        </div>
        <div>
          <Select
            selectedItemLabel="주문번호"
            handleOptionChange={() => {}}
            optionItems={[{ label: '주문번호', value: '주문번호', description: '' }]}
            title=""
            isDisable={getDisabledWriteReview()}
          />
          <div className="grid grid-cols-2 mt-2 gap-2">
            <Select
              selectedItemLabel="평점주기"
              handleOptionChange={() => {}}
              optionItems={[
                { label: '★★★★★', value: '5', description: '' },
                { label: '★★★★☆', value: '4', description: '' },
                { label: '★★★☆☆', value: '3', description: '' },
                { label: '★★☆☆☆', value: '2', description: '' },
                { label: '★☆☆☆☆', value: '1', description: '' },
              ]}
              title=""
              isDisable={getDisabledWriteReview()}
            />
            <Button color="black" text="저장하기" />
          </div>
        </div>
      </div>
    </form>
  );
}
