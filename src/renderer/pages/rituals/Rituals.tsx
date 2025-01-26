import React from 'react';

import EntityDashboard from '@/renderer/components/common/entity/EntityDashboard';
import { useBackgroundPosition } from '@/renderer/hooks/common/useBackgroundPosition';
import { useReadAllRituals } from '@/renderer/hooks/ritual/useReadAllRituals';

export default function Rituals() {
  const { entities } = useReadAllRituals();
  useBackgroundPosition('right');
  return (
    <div className='flex-1 p-16'>
      <div className='flex-1'>
        <EntityDashboard entityName='ritual' entities={entities} />
      </div>
    </div>
  );
}
