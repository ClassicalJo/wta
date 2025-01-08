export interface ICrudExpose<T> {
  read: (id: number) => void;
  readAll: () => void;
  update: (entity: Partial<T>) => void;
  create: (entity: Omit<T, 'id'>) => void;
  delete: (id: number) => void;
}
