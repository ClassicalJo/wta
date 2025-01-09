import React from 'react';

import ButtonLink, {
  ButtonLinkType,
} from '@/renderer/components/common/ButtonLink';
import CharacterDashboard from '@/renderer/components/common/characters/CharacterDashboard';
import { useReadAllCharacters } from '@/renderer/hooks/character/useReadAllCharacters';

export default function Characters() {
  const { characters } = useReadAllCharacters();
  return (
    <div>
      <ButtonLink to='/' type={ButtonLinkType.TEXT} color='darkred'>
        Back
      </ButtonLink>
      <div className='flex-column gap-2'>
        <div className='flex-1'>
          <CharacterDashboard characters={characters} />
        </div>
      </div>
    </div>
  );
}
