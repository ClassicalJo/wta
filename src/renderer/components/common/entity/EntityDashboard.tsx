import React from 'react';

import { IEntity } from '@/main/modules/common/application/interfaces/entity.interface';

import EntityLink from './EntityLink';

type Props<T extends IEntity> = {
  entities: T[];
  entityName: string;
};
export default function EntityDashboard<T extends IEntity>({
  entities,
  entityName,
}: Props<T>) {
  return (
    <div className='flex flex-1 flex-col max-w-screen-md'>
      <div className='grid grid-cols-1 gap-8'>
        <EntityLink
          link={`/${entityName}/create`}
          text={`+ New ${entityName}`}
        />
        {entities.map((entity: T) => (
          <EntityLink
            key={entity.id}
            link={`/${entityName}/${entity.id}`}
            text={
              'name' in entity && typeof entity['name'] === 'string'
                ? entity.name
                : entity.id.toString()
            }
          />
        ))}
      </div>
    </div>
  );
}
