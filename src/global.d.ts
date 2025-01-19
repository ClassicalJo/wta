import { ICharacterExpose } from './main/modules/character/application/ipc/character-expose.interface';
import { IGiftExpose } from './main/modules/gift/application/ipc/gift-expose.interface';
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
      };
    };
  }
}

// This ensures the file is treated as a module and enables the global declaration
export {};
