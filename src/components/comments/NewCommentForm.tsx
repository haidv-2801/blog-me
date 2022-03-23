import { FormEvent, useRef } from 'react';
import { useEffect } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { addComment } from '../../api/CommentApi';
import useHttp from '../../hooks/useHttp';
import useInput from '../../hooks/useInput';
import Comment from '../../models/Comment';

interface ParamTypes {
  blogId: string;
}

const nameLength = (value: string) => value.trim().length > 2 && value.trim().length < 30;
const isNotEmpty = (value: string) => value.trim().length > 0;

const NewCommentForm:React.FC<{addedComment: () => void}> = (props) => {
  const nameRef = useRef<HTMLInputElement>(null);
  const {sendRequest: requestFunction, status, error} = useHttp(addComment)
  const params = useParams<ParamTypes>();

  const {
    value: nameValue,
    isValid: nameIsValid,
    valueChangeHandler: nameChangeHandler,
    inputBlurHandler: nameBlurHandler,
    reset: resetName,
  } = useInput(nameLength);

  const {
    value: messageValue,
    isValid: messageIsValid,
    valueChangeHandler: messageChangeHandler,
    inputBlurHandler: messageBlurHandler,
    reset: resetMessage,
  } = useInput(isNotEmpty);

  useEffect(() => {
    nameRef.current!.focus();
  }, []);

  let formIsValid = false;

  if(nameIsValid && messageIsValid) {
    formIsValid = true;
  }

  const onSubmitHandler = async (event: FormEvent) => {
    event.preventDefault();
    if(!formIsValid) return;
    const commentObj = new Comment(nameValue, messageValue);
    await requestFunction({blogId: params.blogId, commentObj});
    resetMessage();
    props.addedComment();
  };

  return (
    <form onSubmit={onSubmitHandler as any} className="form main-appear-ani">
      <div className="form-control row">
        <label htmlFor="name">Name:</label>
        <div className="input-group">
          <input
            value={nameValue}
            onChange={nameChangeHandler}
            ref={nameRef}
            id="name"
            className="input"
          />
        </div>
      </div>

      <div className="form-control row">
        <label htmlFor="message">Message:</label>
        <div className="input-group">
          <textarea
            value={messageValue}
            onChange={messageChangeHandler}
            id="message"
            className="textarea"
          />
        </div>
      </div>

      <div className="form-bottom">
        <button className={`${!formIsValid ? 'disable' : ' '}`} type="submit">
          {status === 'PENDING' ? 'Sending..' : 'Send'}
        </button>
      </div>
    </form>
  );
};

export default NewCommentForm;
