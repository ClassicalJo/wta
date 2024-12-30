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
      ) => void;
    };
  }
}

// This ensures the file is treated as a module and enables the global declaration
export {};
