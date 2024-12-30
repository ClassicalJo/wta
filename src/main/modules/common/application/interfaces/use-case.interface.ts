export interface IUseCase {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  execute(...args: any): void;
}
