import { BaseException } from './base.exception';

export class NotFoundException extends BaseException {
  constructor(entityName: string, entityId: number) {
    super(`${entityName} with id ${entityId} not found`);
    this.name = 'NotFoundException';
  }
}
