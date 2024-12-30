// global.d.ts
declare global {
  interface Window {
    electron: {
      rendererMessage: (message: string) => void;
    };
  }
}

// This ensures the file is treated as a module and enables the global declaration
export {};
