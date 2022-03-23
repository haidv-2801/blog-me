import { FormEvent, useReducer } from 'react';

type initialInputType = {
  value: string,
  isTouched: boolean,
};

const initialInputState: initialInputType = {
  value: '',
  isTouched: false,
};

const inputStateReducer = (state: any, action: any) => {
  if (action.type === 'INPUT') {
    return { value: action.value, isTouched: state.isTouched };
  }
  if (action.type === 'BLUR') {
    return { isTouched: true, value: state.value };
  }
  if (action.type === 'RESET') {
    return { isTouched: false, value: '' };
  }
  return inputStateReducer;
};

const useInput = (validateValue: any) => {
  const [inputState, dispatch] = useReducer(
    inputStateReducer,
    initialInputState
  );

  const valueIsValid = validateValue((inputState as any).value);
  const hasError = !valueIsValid && (inputState as any).isTouched;

  const valueChangeHandler = (event: FormEvent<HTMLElement>) => {
    dispatch({ type: 'INPUT', value: (event.target as any).value });
  };

  const inputBlurHandler = () => {
    dispatch({ type: 'BLUR' });
  };

  const reset = () => {
    dispatch({ type: 'RESET' });
  };

  return {
    value: (inputState as  any).value,
    isValid: valueIsValid,
    hasError,
    valueChangeHandler,
    inputBlurHandler,
    reset,
  };
};

export default useInput;