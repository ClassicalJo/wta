import { useCallback, useEffect, useState } from 'react';

import { IEntity } from '@/main/modules/common/application/interfaces/entity.interface';
import { IEntityService } from '@/renderer/interfaces/entity-service.interface';
import { MainMessages } from '@/shared/messages/main-messages.enum';

type Props<T extends IEntity> = {
  entityService: IEntityService<T>;
  onResponse: MainMessages;
};

export function makeReadAllEntitiesHook<T extends IEntity>({
  entityService,
  onResponse,
}: Props<T>) {
  return function useReadAllEntities() {
    const [entities, setEntities] = useState<T[]>([]);
    const fetchEntities = useCallback(() => {
      entityService.readAll();
    }, []);

    useEffect(() => {
      fetchEntities();

      const callback = window.electron.onMainMessage(
        onResponse,
        (entities: T[]) => setEntities(entities),
      );

      return () => window.electron.offMainMessage(onResponse, callback);
    }, [fetchEntities, onResponse]);

    return { entities, fetchEntities };
  };
}
