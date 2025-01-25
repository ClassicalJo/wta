import { useEffect, useState } from 'react';

import { IEntity } from '@/main/modules/common/application/interfaces/entity.interface';

export function useList<T extends IEntity | string>(
  allEntities: T[],
  selectedEntities: T[],
): {
  entityList: T[];
  availableEntityList: T[];
  addEntity: (entity: T) => void;
  removeEntity: (entity: T) => void;
} {
  const [entityList, setEntityList] = useState<T[]>([]);
  const [availableEntityList, setAvailableEntityList] = useState([]);

  function addEntity(entity: T) {
    setEntityList([...entityList, entity]);
    setAvailableEntityList(availableEntityList.filter((e) => e !== entity));
  }

  function removeEntity(entity: T) {
    console.log('removing');
    console.log(entity, entityList);
    setEntityList(entityList.filter((e) => e !== entity));
    setAvailableEntityList([...availableEntityList, entity]);
  }

  useEffect(() => {
    setEntityList(selectedEntities);
    setAvailableEntityList(
      allEntities.filter((entity) => !selectedEntities.includes(entity)),
    );
  }, [allEntities, selectedEntities]);

  return { entityList, availableEntityList, addEntity, removeEntity };
}
