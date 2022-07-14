import { useReducer, useCallback, Reducer } from 'react';

interface State {
  data: string | string[] | null;
  error: string | null;
  status: string | null;
}

interface Action {
  type: string | null;
  responseData: string | string[] | null;
  errorMessage: string | null;
}

export const defaultStatus = {
  pending: 'pending',
  error: 'error',
  completed: 'completed',
};

const httpReducer: Reducer<State, Action> = (state, action) => {
  if (action.type === 'SEND') {
    return {
      data: null,
      error: null,
      status: defaultStatus.pending,
    };
  }

  if (action.type === 'SUCCESS') {
    return {
      data: action.responseData,
      error: null,
      status: defaultStatus.completed,
    };
  }

  if (action.type === 'ERROR') {
    return {
      data: null,
      error: action.errorMessage,
      status: defaultStatus.error,
    };
  }

  return state;
};

function useHttp(
  requestFunction: (requestData: string) => Promise<null>,
  startWithPending = false
) {
  const [httpState, dispatch] = useReducer(httpReducer, {
    status: startWithPending ? 'pending' : null,
    data: null,
    error: null,
  });

  const sendRequest = useCallback(
    async (requestData: string) => {
      dispatch({ type: 'SEND', responseData: null, errorMessage: null });
      try {
        const responseData = await requestFunction(requestData);
        dispatch({ type: 'SUCCESS', responseData, errorMessage: null });
      } catch (error: any) {
        dispatch({
          type: 'ERROR',
          responseData: null,
          errorMessage: error.message || 'Something went wrong!',
        });
      }
    },
    [requestFunction]
  );

  return {
    sendRequest,
    ...httpState,
  };
}

export default useHttp;
