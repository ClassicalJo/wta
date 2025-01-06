export interface IUseCase {
  execute(...args: unknown[]): void;
}
