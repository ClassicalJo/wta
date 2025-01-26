import { useReducer } from 'react';

import { IEntity } from '@/main/modules/common/application/interfaces/entity.interface';

export type EntityReducerAction<T extends IEntity> = {
  property: string;
  value: T[keyof T];
};

type State<T extends IEntity> = {
  entity: T;
};

const reducer = <T extends IEntity>(
  state: State<T>,
  action: EntityReducerAction<T>,
): State<T> => ({
  entity: {
    ...state.entity,
    [action.property]: action.value,
  },
});

export const useEntityReducer = <T extends IEntity>(
  entity: T,
): [State<T>, (action: EntityReducerAction<T>) => void] => {
  const [state, dispatch] = useReducer(reducer, {
    entity,
  });
  return [state, dispatch];
};
