import React, { useState } from 'react';
import * as yup from 'yup';
import { useForm, FormProvider } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import BaseInput from '../../UI/form/BaseInput';
import BaseTextArea from '../../UI/form/BaseTextArea';
import CustomCKEditor from '../../common/CKEditor';

type FormData = {
  title: string;
  image: string;
  author: string;
  authorAvatar: string;
  contentSummary: string;
  content: string;
};

const schema = yup.object().shape({});

const FormAdd: React.FC<{
  onSubmit: (data: FormData) => void;
  isLoading: boolean;
}> = (props) => {
  const [preView, setPreView] = useState('');
  const methods = useForm({ resolver: yupResolver(schema) });
  const { handleSubmit } = methods;

  const onSubmit = (data: FormData) => {
    props.onSubmit({...data, content: preView});
  };

  const contentChangeHandler = (data: any) => {
    setPreView(data.getData());
  };

  return (
    <FormProvider {...methods}>
      <form onSubmit={handleSubmit(onSubmit)} className="form form-add">
        <h2>Add new article</h2>

        <BaseInput
          label="Title:"
          hasFocus={false}
          input={{
            id: 'title',
            type: 'text',
            name: 'title',
            placeholder: 'title...',
            defaultValue: '',
          }}
        />

        <BaseInput
          label="image:"
          hasFocus={false}
          input={{
            id: 'image',
            type: 'text',
            name: 'image',
            placeholder: 'image...',
            defaultValue: '',
          }}
        />

        <BaseInput
          label="Author:"
          hasFocus={false}
          input={{
            id: 'author',
            type: 'text',
            name: 'author',
            placeholder: 'author...',
            defaultValue: '',
          }}
        />

        <BaseInput
          label="Author Avatar:"
          hasFocus={false}
          input={{
            id: 'authorAvatar',
            type: 'text',
            name: 'authorAvatar',
            placeholder: 'author avatar...',
            defaultValue: '',
          }}
        />

        <BaseTextArea
          label="Content Summary:"
          hasFocus={false}
          input={{
            id: 'contentSummary',
            type: 'text',
            name: 'contentSummary',
            placeholder: 'content summary...',
            cols: 40,
            rows: 20,
            defaultValue: '',
          }}
        />

        <CustomCKEditor onChange={contentChangeHandler} />

        <div
          className="preview blog-detail"
          dangerouslySetInnerHTML={{ __html: preView }}
        ></div>

        <div className="form-bottom">
          <button type="submit">{props.isLoading ? 'Loading' : 'Send'}</button>
        </div>
      </form>
    </FormProvider>
  );
};

export default FormAdd;
