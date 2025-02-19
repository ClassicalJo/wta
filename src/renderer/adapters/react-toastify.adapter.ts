import { ToastOptions, toast } from 'react-toastify';

import { INotificationAdapter } from '../interfaces/notification-adapter.interface';

export class ReactToastifyAdapter
  implements INotificationAdapter<ToastOptions>
{
  success(message: string, config?: ToastOptions) {
    toast.dismiss();
    toast.success(message, { position: 'bottom-right', ...config });
  }

  error(message: string, config?: ToastOptions) {
    toast.dismiss();
    toast.error(message, { position: 'bottom-right', ...config });
  }
}
