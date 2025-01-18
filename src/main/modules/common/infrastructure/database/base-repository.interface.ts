export interface IBaseRepository<T> {
  createOne(entity: T): Promise<T>;
  readOne(id: number): Promise<T>;
  readAll(): Promise<T[]>;
  updateOne(entity: T): Promise<T>;
  deleteOne(id: number): Promise<void>;
}
