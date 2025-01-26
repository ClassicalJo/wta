import { ICharacterExpose } from './main/modules/character/application/ipc/character-expose.interface';
import { IFightExpose } from './main/modules/fight/application/ipc/fight-expose.interface';
import { IGiftExpose } from './main/modules/gift/application/ipc/gift-expose.interface';
import { IRitualExpose } from './main/modules/ritual/application/ipc/ritual-expose.interface';
import { MainMessages } from './shared/messages/main-messages.enum';
import { IMainPayloads } from './shared/payloads/main-payloads.interface';

// global.d.ts
declare global {
  interface Window {
    electron: {
      rendererMessage: (message: string) => void;
      onMainMessage: <T extends MainMessages>(
        type: T,
        callback: (payload: IMainPayloads[T]) => void,
      ) => () => void;
      offMainMessage: <T extends MainMessages>(
        type: T,
        callback: (payload: IMainPayloads[T]) => void,
      ) => void;
      db: {
        character: ICharacterExpose;
        gift: IGiftExpose;
        ritual: IRitualExpose;
        fight: IFightExpose;
      };
    };
  }
}

// This ensures the file is treated as a module and enables the global declaration
export {};
