export interface INotificationAdapter<K> {
  success: (message: string, config?: K) => void;
  error: (message: string, config?: K) => void;
}
