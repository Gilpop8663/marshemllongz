import React from 'react';
import CheckBox from '@components/common/CheckBox';

export default function SignUpCheckBoxes() {
  return (
    <div className="flex flex-col gap-4">
      <CheckBox text="모두 동의합니다." />
      <CheckBox text="(필수) 이용약관과 개인정보 수집 및 이용에 동의합니다." required />
      <CheckBox
        text="(필수) 만 14세 이상입니다."
        description="만 19세 미만의 미성년자가 결제 시 법정대리인이 거래를 취소할 수 있습니다."
        required
      />
      <CheckBox
        text="(선택) 이메일 및 SMS 마케팅 정보 수신에 동의합니다."
        description="회원은 언제든지 회원 정보에서 수신 거부로 변경할 수 있습니다."
      />
    </div>
  );
}
