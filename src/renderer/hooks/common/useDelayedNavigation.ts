import { useEffect, useReducer } from 'react';

enum NavigationState {
  STARTING = 'STARTING',
  STARTED = 'STARTED',
  ENDING = 'ENDING',
}

type State = {
  status: NavigationState;
};

type Action = { type: NavigationState };

const navigationReducer = (state: State, action: Action): State => {
  switch (action.type) {
    case NavigationState.STARTING:
      return { status: NavigationState.STARTING };
    case NavigationState.STARTED:
      return { status: NavigationState.STARTED };
    case NavigationState.ENDING:
      return { status: NavigationState.ENDING };
    default:
      return state;
  }
};

function setNavigationState(isEnding: boolean): Action {
  return { type: isEnding ? NavigationState.ENDING : NavigationState.STARTING };
}

export function useDelayedNavigation(delay = 500) {
  const [state, dispatch] = useReducer(navigationReducer, {
    status: NavigationState.STARTING,
  });
  const starting = state.status === NavigationState.STARTING;
  const started = state.status === NavigationState.STARTED;
  const leaving = state.status === NavigationState.ENDING;

  useEffect(() => {
    const timeout = setTimeout(() => {
      dispatch({ type: NavigationState.STARTED });
    }, delay);
    return () => clearTimeout(timeout);
  }, [delay]);
  const dispatchNavigation = (isEnding: boolean) => {
    dispatch(setNavigationState(isEnding));
  };

  return { starting, started, leaving, dispatchNavigation };
}
