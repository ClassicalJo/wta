import React from 'react';

import { IEntity } from '@/main/modules/common/application/interfaces/entity.interface';
import {
  EntityReducerActions,
  useEntityReducer,
} from '@/renderer/hooks/common/useEntityReducer';
import { useModal } from '@/renderer/hooks/common/useModal';
import { nameOrId } from '@/shared/utils/nameOrId';

import EntityAddMore from './EntityAddMore';
import EntityModalListItem from './EntityModalListItem';

type Props<T extends IEntity, K extends IEntity> = {
  allEntities: K[];
  selectedEntities: K[];
  propertyName: string & keyof Omit<T, 'id'>;
  update: (entity: Omit<T, 'id'>) => void;
};
export default function EntityModalSelectEntity<
  T extends IEntity,
  K extends IEntity,
>({ allEntities, selectedEntities, propertyName, update }: Props<T, K>) {
  const { ref, openModal, closeModal } = useModal();
  const [state, dispatch] = useEntityReducer<K>(allEntities, selectedEntities);

  const addEntity = (entity: K) => {
    dispatch({
      type: EntityReducerActions.ADD,
      entity,
    });
    update({ [propertyName]: [...state.selectedEntities, entity] } as Omit<
      T,
      'id'
    >);
  };

  const removeEntity = (entity: K) => {
    dispatch({
      type: EntityReducerActions.REMOVE,
      entity,
    });
    update({
      [propertyName]: state.selectedEntities.filter((k) => k.id !== entity.id),
    } as Omit<T, 'id'>);
  };

  return (
    <div className='flex flex-col gap-2'>
      {selectedEntities.map((entity) => (
        <EntityModalListItem
          key={entity.id}
          text={nameOrId(entity)}
          onClick={() => removeEntity(entity)}
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
          {state.availableEntities.map((entity) => (
            <div key={entity.id}>
              <p
                className='whitespace-nowrap overflow-hidden text-ellipsis text-3xl'
                onClick={() => addEntity(entity)}
              >
                {nameOrId(entity)}
              </p>
            </div>
          ))}
        </div>
      </dialog>
    </div>
  );
}
