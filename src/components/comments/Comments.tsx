import React from 'react';
import { useCallback } from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { XCircle } from 'react-feather';
import { useParams } from 'react-router-dom';
import { getComments } from '../../api/CommentApi';
import useHttp from '../../hooks/useHttp';
import LoadingSpinner from '../common/LoadingSpinner';
import CommentList from './CommentList';
import NewCommentForm from './NewCommentForm';

interface ParamTypes {
  blogId: string;
}

const Comments = () => {
  const [isAddingComment, setIsAddingComment] = useState(false);
  const { sendRequest, status, data: loadedComments } = useHttp(getComments);
  const params = useParams<ParamTypes>();
  const { blogId } = params;


  useEffect(() => {
      sendRequest(blogId);
  }, [blogId, sendRequest]);

  const startAddCommentHandler = () => {
    setIsAddingComment(true);
    // setTimeout(() => {
    //   window.scrollTo(0, document.body.scrollHeight);
    // }, 0);
  };

  const addedCommentHandler = useCallback(() => {
    sendRequest(blogId);
  }, [blogId, sendRequest]);

  let comments;

  if (status === 'PENDING') {
    // comments = <LoadingSpinner />;
  }

  if (status === 'COMPLETED' && loadedComments && loadedComments.length > 0) {
    comments = <CommentList comments={loadedComments} />;
  }

  if (status === 'COMPLETED' && (!loadedComments || loadedComments.length === 0)) {
    comments = <p>No comments were added yet!</p>;
  }

  return (
    <section className="comments">
      <h3>User Comments</h3>
      {!isAddingComment && (
        <button onClick={startAddCommentHandler} className="btn">
          Add a comment
        </button>
      )}
      {isAddingComment && (
        <>
          <XCircle
            onClick={() => setIsAddingComment(false)}
            className="icon float-right"
            strokeWidth="1px"
            size="2rem"
          />
          <NewCommentForm addedComment={addedCommentHandler} />
        </>
      )}
      {comments}
    </section>
  );
};

export default Comments;
