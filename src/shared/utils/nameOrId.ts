import { IEntity } from '@/main/modules/common/application/interfaces/entity.interface';

export function nameOrId(entity: IEntity): string {
  if ('name' in entity && typeof entity['name'] === 'string') {
    return entity.name;
  } else return entity.id.toString();
}
