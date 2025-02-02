import { useCallback } from 'react';

export function useStats(
  update: (propertyName: string, value: number) => void,
) {
  const updateByPropertyName = useCallback(
    (e: React.MouseEvent<HTMLElement>) => {
      if (e.target instanceof HTMLElement) {
        const dataset = e.target.dataset;
        const { name, value } = dataset;
        if (!name || !value) return;

        update(name, Number(value));
      }
    },
    [update],
  );

  return { updateByPropertyName };
}
