import { useCallback, useEffect, useState } from 'react';
import { useNavigate } from 'react-router';

import { UpdateDto } from '@/main/modules/common/application/dto/update.dto';
import { IEntity } from '@/main/modules/common/application/interfaces/entity.interface';
import { IEntityService } from '@/renderer/interfaces/entity-service.interface';
import { notificationService } from '@/renderer/services/notification.service';
import { MainMessages } from '@/shared/messages/main-messages.enum';

type Props<T extends IEntity> = {
  entityName: string;
  entityService: IEntityService<T>;
  entityConstructor: new () => T;
  onRead: MainMessages;
  onUpdate: MainMessages;
  onDelete: MainMessages;
};

export function makeUseEntityHook<T extends IEntity>({
  entityName,
  entityService,
  entityConstructor,
  onRead,
  onUpdate,
  onDelete,
}: Props<T>) {
  return function useEntity(id: number) {
    const navigate = useNavigate();
    const [entity, setEntity] = useState(new entityConstructor());
    const [confirmDelete, setConfirmDelete] = useState<boolean>(false);

    const fetchEntity = useCallback(() => {
      entityService.read(id);
    }, [id]);

    const updateEntity = useCallback(
      (partial: T) => {
        const updatedEntity = { ...entity, ...partial };
        const updateEntityDto = new UpdateDto<T>(entity.id, partial);
        setEntity(updatedEntity);
        entityService.update(updateEntityDto);
      },
      [entity, setEntity],
    );

    const deleteEntity = useCallback(() => {
      if (!confirmDelete) {
        setConfirmDelete(true);
      } else {
        entityService.delete(id);
      }
    }, [id, confirmDelete, setConfirmDelete]);

    const cancelDeleteEntity = useCallback(() => {
      setConfirmDelete(false);
    }, []);

    const handleReadEntityResponse = useCallback(
      (entity: T) => {
        setEntity(entity);
      },
      [setEntity],
    );

    const handleUpdateEntityResponse = useCallback(
      (entity: T) => {
        setEntity(entity);
      },
      [setEntity],
    );

    const handleDeleteEntityResponse = useCallback(() => {
      notificationService.success('Entity deleted');
      navigate(`/${entityName}`);
    }, [navigate]);

    useEffect(() => {
      fetchEntity();

      const readCallback = window.electron.onMainMessage(
        onRead,
        handleReadEntityResponse,
      );

      const updateCallback = window.electron.onMainMessage(
        onUpdate,
        handleUpdateEntityResponse,
      );

      const deleteCallback = window.electron.onMainMessage(
        onDelete,
        handleDeleteEntityResponse,
      );

      return () => {
        window.electron.offMainMessage(onRead, readCallback);
        window.electron.offMainMessage(onUpdate, updateCallback);
        window.electron.offMainMessage(onDelete, deleteCallback);
      };
    }, [
      id,
      fetchEntity,
      handleReadEntityResponse,
      handleDeleteEntityResponse,
      handleUpdateEntityResponse,
    ]);

    return {
      entity,
      updateEntity,
      deleteEntity,
      cancelDeleteEntity,
      confirmDelete,
    };
  };
}
