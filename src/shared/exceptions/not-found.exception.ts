import { BaseException } from './base.exception';

export class NotFoundException extends BaseException {
  constructor(entityId: number) {
    super(`Entity with id ${entityId} not found`);
    this.name = 'NotFoundException';
  }
}
