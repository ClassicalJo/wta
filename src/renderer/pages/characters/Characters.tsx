import React from 'react';

import { Character } from '@/main/modules/character/domain/character.entity';
import { CHARACTER_ENTITY_NAME } from '@/main/modules/character/infrastructure/database/character.schema';
import EntityDashboard from '@/renderer/components/common/entity/EntityDashboard';
import { useReadAllCharacters } from '@/renderer/hooks/character/useReadAllCharacters';

export default function Characters() {
  const { entities } = useReadAllCharacters();
  return (
    <div className='flex-column gap-2'>
      <div className='flex-1'>
        <EntityDashboard<Character>
          entityName={CHARACTER_ENTITY_NAME}
          entities={entities}
        />
      </div>
    </div>
  );
}
