import React from 'react';
import * as yup from 'yup';
import { useForm, FormProvider } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import BaseInput from '../UI/form/BaseInput';
import BaseTextArea from '../UI/form/BaseTextArea';

type FormData = {
  name: string;
  email: string;
  message: string;
};

const schema = yup.object().shape({
  // name: yup.string().trim().min(3, 'Độ dài tối thiểu 3 kí tự').max(100, "Độ dài tối đa 100 kí tự"),
  email: yup
    .string()
    .trim()
    .required('Email is required')
    .matches(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
      'Email is not valid'
    ),
});

const Form: React.FC<{
  onSubmit: (data: FormData) => void;
  isLoading: boolean;
}> = (props) => {
  const methods = useForm({ resolver: yupResolver(schema) });
  const { handleSubmit } = methods;

  const onSubmit = async (data: FormData) => {
    props.onSubmit(data);
  };

  return (
    <FormProvider {...methods}>
      <form onSubmit={handleSubmit(onSubmit)} className="form">
        <h2>Send your message</h2>

        <BaseInput
          label="Name:"
          hasFocus={false}
          input={{
            id: 'name',
            type: 'text',
            name: 'name',
            placeholder: 'name...',
            defaultValue: '',
          }}
        />

        <BaseInput
          label="Email:"
          hasFocus={false}
          input={{
            id: 'email',
            type: 'email',
            name: 'email',
            placeholder: 'email...',
            defaultValue: '',
          }}
        />

        <BaseTextArea
          label="Message:"
          hasFocus={false}
          input={{
            id: 'message',
            type: 'text',
            name: 'message',
            placeholder: 'message...',
            cols: 40,
            rows: 20,
            defaultValue: '',
          }}
        />

        <div className="form-bottom">
          <button type="submit">{props.isLoading ? 'Loading' : 'Send'}</button>
        </div>

        <p className="more-contact">Or contact via +84388039267</p>
      </form>
    </FormProvider>
  );
};

export default Form;
