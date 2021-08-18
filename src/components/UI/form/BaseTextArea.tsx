import React from 'react';
import { useFormContext } from 'react-hook-form';

type inputPropsType = {
  id: string;
  type: string;
  name: string;
  rows: number;
  cols: number;
  placeholder: string;
  defaultValue: string;
};

const BaseInput: React.FC<{
  label: string;
  hasFocus: boolean;
  input: inputPropsType;
}> = (props) => {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  return (
    <div className="form-control row">
      <label htmlFor={props.input.id}>{props.label}</label>
      <div className="input-group">
        <textarea
          {...register(props.input.name)}
          {...props.input}
          className="textarea"
        />
      </div>
      <p className="error">{errors[props.input.name]?.message}</p>
    </div>
  );
};
export default BaseInput;
