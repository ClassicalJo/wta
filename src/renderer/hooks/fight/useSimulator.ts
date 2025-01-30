import { useEffect } from 'react';

import { fightService } from '@/renderer/services/fight.service';
import { notificationService } from '@/renderer/services/notification.service';
import { MainMessages } from '@/shared/messages/main-messages.enum';

export function useSimulator() {
  const beginFight = (id: number) => {
    if (!id) notificationService.error(`Fight with id ${id} not found`);
    fightService.begin(id);
  };
  useEffect(() => {
    const callback = window.electron.onMainMessage(
      MainMessages.FIGHT_BEGIN_RESPONSE,
      (e: string) => {
        const blob = new Blob([e], { type: 'text/plain' });
        const link = document.createElement('a');
        link.href = URL.createObjectURL(blob);
        link.download = 'results.txt';
        link.click();
        URL.revokeObjectURL(link.href);
      },
    );
    return () => {
      window.electron.offMainMessage(
        MainMessages.FIGHT_BEGIN_RESPONSE,
        callback,
      );
    };
  }, []);
  return { beginFight };
}
