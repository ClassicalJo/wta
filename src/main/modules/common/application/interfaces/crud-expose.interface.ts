export interface ICrudExpose<T> {
  read: (id: number) => void;
  update: (entity: T) => void;
  create: (entity: Omit<T, 'id'>) => void;
  delete: (id: number) => void;
}
