import React from 'react';

import EntityDashboard from '@/renderer/components/common/entity/EntityDashboard';
import { useReadAllGifts } from '@/renderer/hooks/gift/useReadAllGifts';

export default function Gifts() {
  const { entities } = useReadAllGifts();
  return (
    <div className='flex-1 p-8'>
      <EntityDashboard entityName='gift' entities={entities} />
    </div>
  );
}
