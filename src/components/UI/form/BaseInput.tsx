import React, { useEffect } from 'react';
import { useFormContext } from 'react-hook-form';

type inputPropsType = {
  id: string,
  type: string,
  name: string,
  placeholder: string
  defaultValue: string
}

const BaseInput:React.FC<{label: string, hasFocus: boolean, input: inputPropsType}> = (props) => {
  const {
    register,
    setFocus,
    formState: { errors },
  } = useFormContext();

  useEffect(() => {
    if (props.hasFocus) {
      setFocus(`${props.hasFocus}`);
    }
  }, [setFocus, props.hasFocus]);

  return (
    <div className="form-control row">
      <label htmlFor={props.input.id}>{props.label}</label>
      <div className="input-group">
        <input
          {...register(props.input.name)}
          {...props.input}
          className={`input ${errors[props.input.name] ? 'invalid' : ''}`}
        />
      </div>
      <p className="error">{errors[props.input.name]?.message}</p>
    </div>
  );
};
export default BaseInput;
