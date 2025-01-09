import { ToastOptions } from 'react-toastify';

import { ReactToastifyAdapter } from '../adapters/react-toastify.adapter';
import { INotificationAdapter } from '../interfaces/notification-adapter.interface';

export class NotificationService<K = unknown> {
  constructor(public notificationAdapter: INotificationAdapter<K>) {}
  success(message: string, configOptions?: K) {
    this.notificationAdapter.success(message, configOptions);
  }
  error(message: string, configOptions?: K) {
    this.notificationAdapter.error(message, configOptions);
  }
}

export const notificationService = new NotificationService<ToastOptions>(
  new ReactToastifyAdapter(),
);
