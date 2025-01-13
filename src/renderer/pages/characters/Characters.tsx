import React from 'react';

import CharacterDashboard from '@/renderer/components/common/characters/CharacterDashboard';
import { useReadAllCharacters } from '@/renderer/hooks/character/useReadAllCharacters';

export default function Characters() {
  const { characters } = useReadAllCharacters();
  return (
    <div className='flex-column gap-2'>
      <div className='flex-1'>
        <CharacterDashboard characters={characters} />
      </div>
    </div>
  );
}
