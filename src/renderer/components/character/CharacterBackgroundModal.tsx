import React from 'react';

import { Background } from '@/main/modules/background/domain/background.entity';
import { useModal } from '@/renderer/hooks/common/useModal';

import EntityAddMore from '../common/entity/EntityAddMore';
import EntityInputNumber from '../common/entity/EntityInputNumber';
import EntityInputText from '../common/entity/EntityInputText';
import CharacterBackgroundDialog from './CharacterBackgroundDialog';

type Props = {
  backgrounds: Background[];
  update: (backgrounds: Background[]) => void;
};
export default function CharacterBackgroundModal({
  backgrounds,
  update,
}: Props) {
  const { ref, openModal, closeModal } = useModal();
  const addBackground = (background: Background) => {
    update([...backgrounds, background]);
  };

  const removeBackground = (background: Background) => {
    update(backgrounds.filter((k) => k.id !== background.id));
  };

  const updateBackground = (background: Background) => {
    const filtered = backgrounds.filter((k) => k.id !== background.id);
    update([...filtered, background]);
  };

  return (
    <div className='flex flex-col gap-2'>
      {backgrounds
        .sort((a, b) => a.id - b.id)
        .map((k, index) => (
          <div
            key={`background-${k.id}-${index}`}
            className='flex gap-4 items-center h-12 bg-white/25 rounded-md'
          >
            <button
              className='w-8 h-8 items-center'
              onClick={() => removeBackground(k)}
            >
              ✖️
            </button>
            <div className='flex-1 flex-col  items-center'>
              <EntityInputText
                hide
                propertyName='name'
                propertyValue={k.name}
                update={(propertyName: string, propertyValue: string) =>
                  updateBackground({ ...k, [propertyName]: propertyValue })
                }
              />
            </div>

            <div className='flex items-center h-full'>
              <EntityInputNumber
                maxDots={10}
                fontSize='text-md'
                propertyName='level'
                propertyValue={k.level}
                hide
                update={(propertyName: string, propertyValue: number) =>
                  updateBackground({ ...k, [propertyName]: propertyValue })
                }
              />
            </div>
          </div>
        ))}
      <EntityAddMore onClick={openModal} />
      <CharacterBackgroundDialog
        ref={ref}
        handleCloseModal={closeModal}
        addBackground={addBackground}
      />
    </div>
  );
}
