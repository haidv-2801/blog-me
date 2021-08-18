import React  from 'react';
import { CKEditor } from 'ckeditor4-react';

const CustomCKEditor: React.FC<{ onChange: (data: any) => void }> = (props) => {
  const onChangHandler = (editor: any) => {
    props.onChange(editor);
  };

  return (
    <CKEditor initData={''} onChange={({ editor }) => onChangHandler(editor)} />
  );
};

export default CustomCKEditor;
