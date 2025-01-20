import { useEffect, useReducer } from 'react';

import { IEntity } from '@/main/modules/common/application/interfaces/entity.interface';

export enum EntityReducerActions {
  ADD = 'ADD',
  REMOVE = 'REMOVE',
  UPDATE_ALL_ENTITIES = 'UPDATE_ALL_ENTITIES',
  UPDATE_SELECTED_ENTITIES = 'UPDATE_SELECTED_ENTITIES',
}
type Action<T extends IEntity> =
  | { type: EntityReducerActions.ADD; entity: T }
  | { type: EntityReducerActions.REMOVE; entity: T }
  | { type: EntityReducerActions.UPDATE_ALL_ENTITIES; allEntities: T[] }
  | {
      type: EntityReducerActions.UPDATE_SELECTED_ENTITIES;
      selectedEntities: T[];
    };

type State<T extends IEntity> = {
  allEntities: T[];
  selectedEntities: T[];
  availableEntities: T[];
};

const reducer = <T extends IEntity>(
  state: State<T>,
  action: Action<T>,
): State<T> => {
  switch (action.type) {
    case EntityReducerActions.ADD: {
      return {
        ...state,
        selectedEntities: [...state.selectedEntities, action.entity],
        availableEntities: state.availableEntities.filter(
          (entity) => entity.id !== action.entity.id,
        ),
      };
    }
    case EntityReducerActions.REMOVE: {
      return {
        ...state,
        selectedEntities: state.selectedEntities.filter(
          (entity) => entity.id !== action.entity.id,
        ),
        availableEntities: [...state.availableEntities, action.entity],
      };
    }
    case EntityReducerActions.UPDATE_ALL_ENTITIES: {
      return {
        allEntities: action.allEntities,
        selectedEntities: state.selectedEntities,
        availableEntities: action.allEntities.filter(
          (entity) =>
            !state.selectedEntities.some(
              (selectedEntity) => selectedEntity.id === entity.id,
            ),
        ),
      };
    }
    case EntityReducerActions.UPDATE_SELECTED_ENTITIES: {
      return {
        allEntities: state.allEntities,
        selectedEntities: action.selectedEntities,
        availableEntities: state.allEntities.filter(
          (entity) =>
            !action.selectedEntities.some(
              (selectedEntity) => selectedEntity.id === entity.id,
            ),
        ),
      };
    }
    default:
      throw new Error();
  }
};

export const useEntityReducer = <T extends IEntity>(
  allEntities: T[] = [],
  selectedEntities: T[] = [],
): [State<T>, (action: Action<T>) => void] => {
  const [state, dispatch] = useReducer(reducer, {
    allEntities,
    selectedEntities,
    availableEntities: allEntities.filter(
      (entity) =>
        !selectedEntities.some(
          (selectedEntity) => selectedEntity.id === entity.id,
        ),
    ),
  });

  useEffect(() => {
    dispatch({
      type: EntityReducerActions.UPDATE_ALL_ENTITIES,
      allEntities,
    });
  }, [allEntities]);

  useEffect(() => {
    dispatch({
      type: EntityReducerActions.UPDATE_SELECTED_ENTITIES,
      selectedEntities,
    });
  }, [selectedEntities]);

  return [state, dispatch];
};
