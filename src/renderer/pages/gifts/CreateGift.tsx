import { Form, Formik } from 'formik';
import React from 'react';

import { Gift } from '@/main/modules/gift/domain/gift.entity';
import EntityFormField from '@/renderer/components/common/entity/EntityFormField';
import EntityFormSubmit from '@/renderer/components/common/entity/EntityFormSubmit';
import Main from '@/renderer/components/common/layout/Main';
import { useCreateGift } from '@/renderer/hooks/gift/useCreateGift';

export default function CreateGift() {
  const { onSubmit } = useCreateGift();

  return (
    <div className='flex flex-col flex-1 w-full gap-8'>
      <h1 className='text-2xl mb-4'>Create gift</h1>
      <Formik
        initialValues={{
          name: '',
        }}
        onSubmit={onSubmit}
      >
        <Form className='flex flex-col gap-2'>
          <EntityFormField<Gift>
            propertyName='name'
            placeholder='Blessing of the Moon'
          />

          <EntityFormSubmit />
        </Form>
      </Formik>
    </div>
  );
}
