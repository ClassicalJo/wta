import { BaseException } from '@/shared/exceptions/base.exception';

export class MainEventHandlerException extends BaseException {
  constructor(
    message: string,
    public originalError?: unknown,
  ) {
    super(message);
    this.name = 'MainEventHandlerException';
    // Attach the original error for debugging if provided
    if (originalError) {
      this.stack += `\nCaused by: ${originalError}`;
    }
  }
}
