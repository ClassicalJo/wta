import React from 'react';

import EntityDashboard from '@/renderer/components/common/entity/EntityDashboard';
import { useReadAllGifts } from '@/renderer/hooks/gift/useReadAllGifts';

export default function Gifts() {
  const { entities } = useReadAllGifts();
  return (
    <div className='flex-column gap-2'>
      <div className='flex-1'>
        <EntityDashboard entityName='gift' entities={entities} />
      </div>
    </div>
  );
}
