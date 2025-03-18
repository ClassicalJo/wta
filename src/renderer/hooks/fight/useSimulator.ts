import { useEffect, useState } from 'react';

import { fightService } from '@/renderer/services/fight.service';
import { notificationService } from '@/renderer/services/notification.service';
import { MainMessages } from '@/shared/messages/main-messages.enum';

export function useSimulator() {
  const [isLoading, setIsLoading] = useState(false);
  const [completedWorkers, setCompletedWorkers] = useState(0);
  const beginFight = (id: number) => {
    if (!id) notificationService.error(`Fight with id ${id} not found`);
    setCompletedWorkers(0);
    fightService.begin(id);
    setIsLoading(true);
  };

  const handleFightResponse = (e: string) => {
    const blob = new Blob([e], { type: 'text/plain' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = 'results.txt';
    link.click();
    URL.revokeObjectURL(link.href);
    setIsLoading(false);
  };

  const handleCompletedWorkerResponse = (e: number) => {
    setCompletedWorkers(e);
  };

  useEffect(() => {
    const callback = window.electron.onMainMessage(
      MainMessages.FIGHT_BEGIN_RESPONSE,
      handleFightResponse,
    );

    const completedWorkerCallback = window.electron.onMainMessage(
      MainMessages.FIGHT_WORKER_RESPONSE,
      handleCompletedWorkerResponse,
    );

    return () => {
      window.electron.offMainMessage(
        MainMessages.FIGHT_BEGIN_RESPONSE,
        callback,
      );
      window.electron.offMainMessage(
        MainMessages.FIGHT_WORKER_RESPONSE,
        completedWorkerCallback,
      );
    };
  }, []);
  return { beginFight, isLoading, completedWorkers };
}
