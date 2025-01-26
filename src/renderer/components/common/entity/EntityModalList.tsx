import React from 'react';

import { useList } from '@/renderer/hooks/common/useList';
import { useModal } from '@/renderer/hooks/common/useModal';
import { nameOrId } from '@/shared/utils/nameOrId';
import { removeUnderline } from '@/shared/utils/removeUnderline';

import EntityAddMore from './EntityAddMore';
import EntityModal from './EntityModal';
import EntityModalListItem from './EntityModalListItem';

type Props<T> = {
  allValues: T[];
  selectedValues: T[];
  propertyName: string;
  update: (propertyValues: T[]) => void;
};
export default function EntityModalList<T>({
  allValues,
  selectedValues,
  propertyName,
  update,
}: Props<T>) {
  const { ref, openModal, closeModal } = useModal();
  const { entityList, availableEntityList, addEntity, removeEntity } = useList(
    allValues,
    selectedValues,
  );

  const addValue = (value: T) => {
    addEntity(value);
    update([...entityList, value]);
  };

  const removeValue = (value: T) => {
    removeEntity(value);
    update(entityList.filter((e) => e !== value));
  };

  return (
    <div className='flex flex-col gap-2'>
      {selectedValues.map((value, index) => (
        <EntityModalListItem
          key={`entity-modal-${index}`}
          text={removeUnderline(
            typeof value === 'string' ? value : nameOrId(value),
          )}
          onClick={() => removeValue(value)}
        />
      ))}

      <EntityAddMore onClick={openModal} />
      <EntityModal
        ref={ref}
        propertyName={propertyName}
        list={availableEntityList}
        onClick={(value: T) => addValue(value)}
        handleCloseModal={closeModal}
      />
    </div>
  );
}
