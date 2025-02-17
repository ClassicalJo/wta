import React from 'react';

import EntityDashboard from '@/renderer/components/common/entity/EntityDashboard';
import { useReadAllRituals } from '@/renderer/hooks/ritual/useReadAllRituals';

export default function Rituals() {
  const { entities } = useReadAllRituals();
  return (
    <div className='mt-8 flex-1 p-8'>
      <div className='flex-1'>
        <EntityDashboard entityName='ritual' entities={entities} />
      </div>
    </div>
  );
}
