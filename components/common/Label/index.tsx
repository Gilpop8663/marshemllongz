import React, { PropsWithChildren } from 'react';

interface LabelProps extends PropsWithChildren, React.LabelHTMLAttributes<HTMLLabelElement> {
  label: string;
  isRequired: boolean;
}

export default function Label({ label, isRequired, children, ...rest }: LabelProps) {
  return (
    <label className="flex flex-col gap-2 text-primaryBlack" {...rest}>
      <div className="flex gap-2">
        <span className="text-sm">{label}</span>
        {isRequired && <span className="text-sm">*</span>}
      </div>
      {children}
    </label>
  );
}
