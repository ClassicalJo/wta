import { Form, Formik } from 'formik';
import React from 'react';

import ButtonLink, {
  ButtonLinkType,
} from '@/renderer/components/common/ButtonLink';
import CharacterField from '@/renderer/components/common/characters/CharacterField';
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
          <CharacterField propertyName='name' placeholder='John' />

          <div className='flex mt-4'>
            <button
              className='flex-1 rounded-full bg-purple-500 text-white text-lg px-5 py-1'
              type='submit'
            >
              Submit
            </button>
          </div>
        </Form>
      </Formik>
    </div>
  );
}
