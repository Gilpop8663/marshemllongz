import React from 'react';
import Button from '@components/common/Button';
import Input from '@components/common/Input';
import Label from '@components/common/Label';
import Select from '@components/common/Select';
import TextEditor from '@components/common/TextEditor';

export default function ProductForm() {
  return (
    <form className="py-24 flex flex-col gap-8">
      <Label isRequired label="상품 사진 (0/10개)">
        <Input type="file" multiple accept="image/*" />
      </Label>
      <Label isRequired label="상품명">
        <Input />
      </Label>
      <Label isRequired label="카테고리">
        <Select
          title=""
          handleOptionChange={() => {}}
          selectedItemLabel="선택해주세요."
          optionItems={[
            { label: '상품', value: 'productNoteBook', description: '노트북/태블릿 파우치' },
            { label: '상품', value: 'productToy', description: '토이/인형' },
            { label: '상품', value: 'productToyKeyRing', description: '키링' },
            { label: '상품', value: 'productToySticker', description: '스티커' },
            { label: '상품', value: 'productSlipper', description: '슬리퍼' },
            { label: '상품', value: 'productTrip', description: '여행, 패키지' },
            { label: '상품', value: 'productFabric', description: '패브릭/생활' },
            { label: '--------', value: '----', description: '' },
            { label: '커뮤니티', value: 'communityNotice', description: '공지사항' },
            { label: '커뮤니티', value: 'communityMedia', description: '언론보도' },
            { label: '커뮤니티', value: 'communityQA', description: 'Q&A' },
            { label: '커뮤니티', value: 'communityWallpaper', description: '배경화면' },
            { label: '커뮤니티', value: 'communityTopReviewer', description: '베스트리뷰어' },
            { label: '--------', value: '----', description: '' },
            { label: '소개', value: 'aboutBrand', description: '브랜드' },
            { label: '소개', value: 'aboutCharacter', description: '캐릭터' },
            { label: '소개', value: 'aboutCollaboration', description: '콜라보레이션' },
            { label: '소개', value: 'aboutContact', description: 'Contact' },
          ]}
        />
      </Label>
      <Label isRequired label="가격">
        <Input type="number" min={0} />
      </Label>
      <Label isRequired label="종류">
        <Select
          title=""
          handleOptionChange={() => {}}
          selectedItemLabel="선택해주세요."
          optionItems={[
            { label: '디자인', value: 'design', description: '' },
            { label: '사이즈', value: 'size', description: '' },
          ]}
        />
      </Label>
      <Label isRequired label="상품 옵션">
        <div className="grid grid-cols-4 text-sm gap-8">
          <span>옵션 이름</span>
          <span>옵션 영어 이름</span>
          <span>옵션 설명</span>
          <span></span>
        </div>
        <div className="grid grid-cols-4 gap-8 mb-8">
          <Input placeholder="마시멜롱 노트북 케이스" />
          <Input placeholder="Marshmallow Laptop Case" />
          <Input placeholder="(+1000원), 적색, 청색" />
          <Button type="button" color="white" text="상품 옵션 지우기" />
        </div>
        <Button type="button" color="black" text="상품 옵션 추가하기" />
      </Label>
      <Label isRequired label="상품 상세 내용 입력">
        <TextEditor />
      </Label>
      <Button type="button" color="black" text="글 등록하기" />
    </form>
  );
}
