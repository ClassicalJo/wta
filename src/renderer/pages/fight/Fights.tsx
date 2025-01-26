import React from 'react';

import EntityDashboard from '@/renderer/components/common/entity/EntityDashboard';
import { useBackgroundPosition } from '@/renderer/hooks/common/useBackgroundPosition';
import { useReadAllFights } from '@/renderer/hooks/fight/useReadAllFights';

export default function Fights() {
  const { entities: fights } = useReadAllFights();
  useBackgroundPosition('bottom');
  return (
    <div className='flex-1 p-16'>
      <EntityDashboard entityName={'fight'} entities={fights} />
    </div>
  );
}
