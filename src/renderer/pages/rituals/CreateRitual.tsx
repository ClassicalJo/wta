import { Form, Formik } from 'formik';
import React from 'react';

import { Ritual } from '@/main/modules/ritual/domain/ritual.entity';
import EntityFormField from '@/renderer/components/common/entity/EntityFormField';
import EntityFormSubmit from '@/renderer/components/common/entity/EntityFormSubmit';
import { useCreateRitual } from '@/renderer/hooks/ritual/useCreateRitual';

export default function CreateRitual() {
  const { onSubmit } = useCreateRitual();

  return (
    <div>
      <h1 className='text-2xl mb-4'>Create ritual</h1>
      <Formik
        initialValues={{
          name: '',
        }}
        onSubmit={onSubmit}
      >
        <Form className='flex flex-col gap-2'>
          <EntityFormField<Ritual>
            propertyName='name'
            placeholder='Rite of the Hunt'
          />

          <EntityFormSubmit />
        </Form>
      </Formik>
    </div>
  );
}
