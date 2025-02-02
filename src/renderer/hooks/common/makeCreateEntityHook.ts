import { useCallback, useEffect } from 'react';
import { useNavigate } from 'react-router';

import { CreateDto } from '@/main/modules/common/application/dto/create.dto';
import { IEntity } from '@/main/modules/common/application/interfaces/entity.interface';
import { IEntityService } from '@/renderer/interfaces/entity-service.interface';
import { MainMessages } from '@/shared/messages/main-messages.enum';
import { capitalize } from '@/shared/utils/capitalize';

import { notificationService } from '../../services/notification.service';
import { useEntityReducer } from './useEntityReducer';

type Props<T extends IEntity> = {
  createDto: new (values: Omit<T, 'id'>) => CreateDto<T>;
  entityName: string;
  entityService: IEntityService<T>;
  mainMessage: MainMessages;
};

export function makeCreateEntityHook<T extends IEntity>({
  createDto,
  entityName,
  entityService,
  mainMessage,
}: Props<T>) {
  return function useCreateEntity() {
    const navigator = useNavigate();
    const onSubmit = useCallback((values: Omit<T, 'id'>) => {
      const createEntityDto = new createDto(values);
      entityService.create(createEntityDto);
    }, []);

    const onCreateSuccess = useCallback(() => {
      notificationService.success(`${capitalize(entityName)} created`);
      navigator(`/${entityName}`);
    }, [navigator]);

    const [state, dispatch] = useEntityReducer<T>();
    const handleSubmit = useCallback(
      () => onSubmit(state.entity),
      [onSubmit, state.entity],
    );

    const handleUpdate = useCallback(
      <K extends keyof T>(propertyName: string, propertyValue: T[K]) =>
        dispatch({
          property: propertyName,
          value: propertyValue,
        }),
      [dispatch],
    );

    useEffect(() => {
      const callback = window.electron.onMainMessage(
        mainMessage,
        onCreateSuccess,
      );

      return () => window.electron.offMainMessage(mainMessage, callback);
    }, [onCreateSuccess]);
    return { handleSubmit, handleUpdate, state };
  };
}
