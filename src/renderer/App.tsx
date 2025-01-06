import React, { useEffect, useState } from 'react';

import { MainMessages } from '@/shared/messages/main-messages.enum';
import { IMainPayloads } from '@/shared/payloads/main-payloads.interface';

import './index.css';
import { characterService } from './services/character.service';

export default function App() {
  const [characterId, setCharacterId] = useState<number>(0);

  useEffect(() => {
    function log(payload: IMainPayloads[MainMessages.MAIN_MESSAGE]) {
      console.log(payload);
    }

    window.electron.onMainMessage(MainMessages.MAIN_MESSAGE, log);

    () => {
      console.log('removing listener');
      window.electron.offMainMessage(MainMessages.MAIN_MESSAGE, log);
    };
  }, []);

  function handleClick() {
    window.electron.rendererMessage('Hello from renderer');
  }
  function handleClickCharacter() {
    characterService.read(characterId);
  }

  function handleClickCreate() {
    characterService.create({
      name: 'Test ' + (Math.random() * 10000).toString().slice(0, 5),
    });
  }
  function handleClickDelete() {
    characterService.delete(characterId);
  }
  function handleClickUpdate() {
    characterService.update({
      id: characterId,
      name: 'Updated ' + (Math.random() * 10000).toString().slice(0, 5),
    });
  }
  return (
    <>
      <h1 className='text-3xl font-bold underline'>Hello world!</h1>
      <input
        className='border-2 border-gray-500 rounded-full px-4 my-2 text-black w-32'
        type='number'
        value={characterId}
        onChange={(e) => setCharacterId(parseInt(e.target.value))}
      />
      <input
        className='bg-blue-500 rounded-full px-4 my-2 text-white'
        type='button'
        value='Send message'
        onClick={handleClick}
      />
      <input
        className='bg-blue-500 rounded-full px-4 my-2 text-white'
        type='button'
        value='Read character'
        onClick={handleClickCharacter}
      />
      <input
        className='bg-blue-500 rounded-full px-4 my-2 text-white'
        type='button'
        value='Create character'
        onClick={handleClickCreate}
      />

      <input
        className='bg-blue-500 rounded-full px-4 my-2 text-white'
        type='button'
        value='Delete character'
        onClick={handleClickDelete}
      />

      <input
        className='bg-blue-500 rounded-full px-4 my-2 text-white'
        type='button'
        value='Update character'
        onClick={handleClickUpdate}
      />
    </>
  );
}
