import { ContentState, EditorState, convertToRaw } from 'draft-js';
import React, { useState } from 'react';
import { Editor } from 'react-draft-wysiwyg';
import draftToHtml from 'draftjs-to-html';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import { useEffect } from 'react';

const editorDefaultText = EditorState.createWithContent(
  ContentState.createFromText('')
);

const TextEditor: React.FC<{ dataReceived: (data: string) => void }> = (
  props
) => {
  const [editorState, setEditorState] = useState(editorDefaultText);

  useEffect(() => {
    let htmlReceived = draftToHtml(
      convertToRaw(editorState.getCurrentContent())
    );
    props.dataReceived(htmlReceived);
  }, [editorState]);

  const onEditorStateChangeHandler = (data: EditorState) => {
    setEditorState(data);
  };

  const uploadImageCallBack = (file: any) => {
    console.log(file);
    return new Promise((resolve: (data: any) => void, reject: () => void) => {
      resolve({data: {}});
    });
  };

  return (
    <div className="editor-container">
      <Editor
        toolbar={{
          image: {
            uploadCallback: uploadImageCallBack,
            previewImage: true,
            alt: { present: true, mandatory: false },
            inputAccept: 'image/gif,image/jpeg,image/jpg,image/png,image/svg',
          },
          fontFamily: {
            options: [
              'inherit',
              'Arial',
              'Georgia',
              'Impact',
              'Tahoma',
              'Times New Roman',
              'Verdana',
              'Open Sans',
            ],
          },
        }}
        editorState={editorState}
        toolbarClassName="customToolbarClassName"
        wrapperClassName="customWrapperClassName"
        editorClassName="customEditorClassName"
        onEditorStateChange={onEditorStateChangeHandler.bind(this)}
      />
      <textarea
        value={draftToHtml(convertToRaw(editorState.getCurrentContent()))}
      />
    </div>
  );
};

export default TextEditor;
