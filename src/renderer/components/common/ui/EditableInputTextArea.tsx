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
export default function EditableInputTextArea({
  className,
  propertyValue,
  children,
  edit,
  setEdit,
  submit,
}: Props) {
  const [value, setValue] = useState<string>('');

  const onChange = (e: React.ChangeEvent<HTMLTextAreaElement>) =>
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
      <textarea
        ref={ref}
        className={`flex flex-1 p-2 focus:bg-slate-50 min-h-32 text-black w-full h-full ${
          className ? className : ''
        }`}
        onChange={onChange}
        value={value ?? ''}
        placeholder={propertyValue}
        autoFocus
      />
    );
  else return children;
}
