import { useReducer, useCallback } from 'react';

function httpReducer(state: any, action: any) {
  if (action.type === 'SEND') {
    return {
      data: null,
      error: null,
      status: 'PENDING',
    };
  }

  if (action.type === 'SUCCESS') {
    return {
      data: action.responseData,
      error: null,
      status: 'COMPLETED',
    };
  }

  if (action.type === 'ERROR') {
    return {
      data: null,
      error: action.errorMessage,
      status: 'COMPLETED',
    };
  }

  return state;
}

function useHttp(requestFunction: (requestData: any) => any, startWithPending:boolean = false) {
  const [httpState, dispatch] = useReducer(httpReducer, {
    status: startWithPending ? 'PENDING' : null,
    data: null,
    error: null,
  });

  const sendRequest = useCallback(async (requestData) => {
    dispatch({ type: 'SEND' });
    try {
        const responseData = await requestFunction(requestData);
        dispatch({ type: 'SUCCESS', responseData});
    } catch (error) {
      dispatch({
        type: 'ERROR',
        errorMessage: error.message || 'Có Lỗi xảy ra!',
      });
    }
  }, [requestFunction]);

  return {
    sendRequest,
    ...httpState,
  };
}

export default useHttp;
