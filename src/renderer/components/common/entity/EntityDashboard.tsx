import React from 'react';

import { IEntity } from '@/main/modules/common/application/interfaces/entity.interface';

import DashboardLink from '../ui/DashboardLink';
import EntityDashboardLink from './EntityDashboardLink';

type Props<T extends IEntity> = {
  entities: T[];
  entityName: string;
};
export default function EntityDashboard<T extends IEntity>({
  entities,
  entityName,
}: Props<T>) {
  return (
    <div className='bg-red-50 font-[Staatliches] text-3xl text-dark-primary *:p-8'>
      <div className='float-right grid max-w-screen-sm grid-flow-row-dense grid-cols-1 gap-8 [&>*:nth-child(even):hover]:[transform:perspective(1000px)_rotateY(0deg);] [&>*:nth-child(even)]:[transform:perspective(1000px)_rotateY(-10deg);] [&>*:nth-child(odd):hover]:[transform:perspective(1000px)_rotateY(0deg);] [&>*:nth-child(odd)]:[transform:perspective(1000px)_rotateY(10deg);] [&>*]:[transition:all_0.15s_ease-in-out;]'>
        <DashboardLink to={`/${entityName}/create`}>
          {`+ New ${entityName}`}
        </DashboardLink>
        {entities.map((entity: T) => (
          <EntityDashboardLink
            key={entity.id}
            entity={entity}
            entityName={entityName}
          />
        ))}
      </div>
    </div>
  );
}
