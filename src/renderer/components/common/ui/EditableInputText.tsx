import React, { useEffect, useState } from 'react';

import { useClickOutside } from '@/renderer/hooks/common/useClickOutside';
import { useKey } from '@/renderer/hooks/common/useKey';

type Props = {
  className?: string;
  propertyValue?: string;
  children?: React.ReactNode;
  edit: boolean;
  setEdit: (value: boolean) => void;
  submit: (propertyValue: string) => void;
};
export default function EditableInputText({
  className,
  propertyValue,
  children,
  edit,
  setEdit,
  submit,
}: Props) {
  const [value, setValue] = useState<string>('');

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setValue(e.currentTarget.value);

  const onCancel = () => {
    setEdit(false);
    setValue(propertyValue);
  };

  useEffect(() => {
    setValue(propertyValue ?? '');
  }, [propertyValue]);

  const { ref } = useClickOutside(() => submit(value));
  useKey('Enter', ref, () => submit(value));
  useKey('Escape', ref, onCancel);

  if (edit)
    return (
      <input
        ref={ref}
        className={
          'flex flex-1 h-full font-[Solitreo] text-2xl outline-dark-text bg-transparent text-white' +
          className
        }
        type='text'
        onChange={onChange}
        value={value}
        placeholder={propertyValue}
        autoFocus={true}
      />
    );
  else return children;
}
