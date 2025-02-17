import React from 'react';

import { Background } from '@/main/modules/background/domain/background.entity';
import { useModal } from '@/renderer/hooks/common/useModal';

import EntityAddMore from '../common/entity/EntityAddMore';
import EntityInputNumber from '../common/entity/EntityInputNumber';
import EntityInputText from '../common/entity/EntityInputText';
import CharacterBackgroundDialog from './CharacterBackgroundDialog';

type Props = {
  backgrounds: Background[];
  addBackground: (background: Background) => void;
  removeBackground: (background: Background) => void;
  updateBackground: (index: number, background: Background) => void;
};
export default function CharacterBackgroundModal({
  backgrounds,
  addBackground,
  removeBackground,
  updateBackground,
}: Props) {
  const { ref, openModal, closeModal } = useModal();
  return (
    <div className='flex flex-col'>
      <div className='flex flex-col gap-8'>
        {backgrounds
          .sort((a, b) => a.id - b.id)
          .map((k, index) => (
            <div
              key={`background-${k.id}-${index}`}
              className='flex h-12 items-center border-b-2 border-white last:border-none'
            >
              <button
                className='h-8 w-8 items-center'
                onClick={() => removeBackground(k)}
              >
                ✖️
              </button>
              <div className='flex-1 flex-col items-center'>
                <EntityInputText
                  propertyValue={k.name}
                  update={(propertyValue: string) =>
                    updateBackground(index, { ...k, name: propertyValue })
                  }
                />
              </div>

              <div className='flex h-full items-center'>
                <EntityInputNumber<Background>
                  maxDots={10}
                  itemIndex={index}
                  itemId={k.id}
                  propertyName='level'
                  propertyValue={k.level}
                />
              </div>
            </div>
          ))}
      </div>
      <EntityAddMore onClick={openModal} />
      <CharacterBackgroundDialog
        ref={ref}
        handleCloseModal={closeModal}
        addBackground={addBackground}
      />
    </div>
  );
}
