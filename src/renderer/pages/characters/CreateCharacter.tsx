import { Form, Formik } from 'formik';
import React from 'react';

import { Character } from '@/main/modules/character/domain/character.entity';
import EntityFormField from '@/renderer/components/common/entity/EntityFormField';
import EntityFormSubmit from '@/renderer/components/common/entity/EntityFormSubmit';
import { useCreateCharacter } from '@/renderer/hooks/character/useCreateCharacter';

export default function CreateCharacter() {
  const { onSubmit } = useCreateCharacter();

  return (
    <div>
      <h1 className='text-2xl mb-4'>Create character</h1>
      <Formik
        initialValues={{
          name: '',
        }}
        onSubmit={onSubmit}
      >
        <Form className='flex flex-col gap-2'>
          <EntityFormField<Character> propertyName='name' placeholder='John' />
          <EntityFormSubmit />
        </Form>
      </Formik>
    </div>
  );
}
