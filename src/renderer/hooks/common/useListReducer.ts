import { useEffect, useReducer } from 'react';

export enum ListReducerActions {
  ADD = 'ADD',
  REMOVE = 'REMOVE',
  UPDATE_ALL_ENTITIES = 'UPDATE_ALL_ENTITIES',
  UPDATE_SELECTED_ENTITIES = 'UPDATE_SELECTED_ENTITIES',
}
type Action =
  | { type: ListReducerActions.ADD; entity: string }
  | { type: ListReducerActions.REMOVE; entity: string }
  | { type: ListReducerActions.UPDATE_ALL_ENTITIES; allEntities: string[] }
  | {
      type: ListReducerActions.UPDATE_SELECTED_ENTITIES;
      selectedEntities: string[];
    };

type State = {
  allEntities: string[];
  selectedEntities: string[];
  availableEntities: string[];
};

const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case ListReducerActions.ADD: {
      return {
        ...state,
        selectedEntities: [...state.selectedEntities, action.entity],
        availableEntities: state.availableEntities.filter(
          (entity) => entity !== action.entity,
        ),
      };
    }
    case ListReducerActions.REMOVE: {
      return {
        ...state,
        selectedEntities: state.selectedEntities.filter(
          (entity) => entity !== action.entity,
        ),
        availableEntities: [...state.availableEntities, action.entity],
      };
    }
    case ListReducerActions.UPDATE_ALL_ENTITIES: {
      return {
        allEntities: action.allEntities,
        selectedEntities: state.selectedEntities,
        availableEntities: action.allEntities.filter(
          (entity) => !state.selectedEntities.includes(entity),
        ),
      };
    }
    case ListReducerActions.UPDATE_SELECTED_ENTITIES: {
      return {
        allEntities: state.allEntities,
        selectedEntities: action.selectedEntities,
        availableEntities: state.allEntities.filter(
          (entity) => !action.selectedEntities.includes(entity),
        ),
      };
    }
    default:
      throw new Error();
  }
};

export const useListReducer = (
  allEntities: string[] = [],
  selectedEntities: string[] = [],
): [State, (action: Action) => void] => {
  const [state, dispatch] = useReducer(reducer, {
    allEntities,
    selectedEntities,
    availableEntities: allEntities.filter(
      (entity) => !selectedEntities.includes(entity),
    ),
  });

  useEffect(() => {
    dispatch({
      type: ListReducerActions.UPDATE_ALL_ENTITIES,
      allEntities,
    });
  }, [allEntities]);

  useEffect(() => {
    dispatch({
      type: ListReducerActions.UPDATE_SELECTED_ENTITIES,
      selectedEntities,
    });
  }, [selectedEntities]);

  return [state, dispatch];
};
