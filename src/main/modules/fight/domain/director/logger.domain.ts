class Logger {
  public logs: string;
  constructor() {
    this.logs = '';
  }
  log(message: string) {
    this.logs += message + '\n';
  }
}
export const logger = new Logger();
