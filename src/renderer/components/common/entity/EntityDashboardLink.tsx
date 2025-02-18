import React from 'react';

import { IEntity } from '@/main/modules/common/application/interfaces/entity.interface';

import DashboardLink from '../ui/DashboardLink';

type Props = {
  entity: IEntity;
  entityName: string;
};
export default function EntityDashboardLink({ entity, entityName }: Props) {
  const hasName =
    'name' in entity && typeof entity['name'] === 'string' && entity['name'];
  const content = hasName || entity.id.toString();
  return (
    <DashboardLink to={`/${entityName}/${entity.id}`}>{content}</DashboardLink>
  );
}
