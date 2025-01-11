import { RefObject, useEffect } from 'react';

export function useKey(
  key: string,
  ref: RefObject<HTMLElement>,
  callback: (event: KeyboardEvent & { key: string }) => void,
) {
  useEffect(() => {
    const current = ref.current;

    const handleKey = (event: KeyboardEvent) => {
      if (event.key === key) {
        callback(event);
      }
    };
    current?.addEventListener('keydown', handleKey);
    return () => {
      current?.removeEventListener('keydown', handleKey);
    };
  }, [key, ref, callback]);
}
