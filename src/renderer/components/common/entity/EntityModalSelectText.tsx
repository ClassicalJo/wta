import React from 'react';

import { IEntity } from '@/main/modules/common/application/interfaces/entity.interface';
import {
  ListReducerActions,
  useListReducer,
} from '@/renderer/hooks/common/useListReducer';
import { useModal } from '@/renderer/hooks/common/useModal';

import EntityAddMore from './EntityAddMore';
import EntityModalListItem from './EntityModalListItem';

type Props<T extends IEntity> = {
  allValues: string[];
  selectedValues: string[];
  propertyName: string & keyof Omit<T, 'id'>;
  update: (entity: Omit<T, 'id'>) => void;
};
export default function EntityModalSelectText<T extends IEntity>({
  allValues,
  selectedValues,
  propertyName,
  update,
}: Props<T>) {
  const { ref, openModal, closeModal } = useModal();
  const [state, dispatch] = useListReducer(allValues, selectedValues);

  const addValue = (value: string) => {
    dispatch({
      type: ListReducerActions.ADD,
      entity: value,
    });
    update({ [propertyName]: [...state.selectedEntities, value] } as Omit<
      T,
      'id'
    >);
  };

  const removeValue = (value: string) => {
    dispatch({
      type: ListReducerActions.REMOVE,
      entity: value,
    });
    update({
      [propertyName]: state.selectedEntities.filter((v) => v !== value),
    } as Omit<T, 'id'>);
  };

  return (
    <div className='flex flex-col gap-2'>
      {selectedValues.map((value) => (
        <EntityModalListItem
          key={value}
          text={value}
          onClick={() => removeValue(value)}
        />
      ))}

      <EntityAddMore onClick={openModal} />
      <dialog
        ref={ref}
        className='rounded-sm p-4 max-w-screen-sm max-h-[50%] border-2 border-black bg-slate-300'
      >
        <div className='flex justify-center'>
          <h1 className='flex-1 text-3xl'>{`Available ${propertyName}`}</h1>
          <button className='px-2 text-xl justify-center' onClick={closeModal}>
            ✖️
          </button>
        </div>
        <div>
          {state.availableEntities.map((value) => (
            <div key={value}>
              <p
                className='whitespace-nowrap overflow-hidden text-ellipsis text-3xl'
                onClick={() => addValue(value)}
              >
                {value}
              </p>
            </div>
          ))}
        </div>
      </dialog>
    </div>
  );
}
