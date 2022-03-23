import React from 'react';
import Comment from '../../models/Comment';
import CommentItem from './CommentItem';

const sortedCommentList = (commentList: Comment[]) => {
  return commentList.sort((a: Comment, b: Comment) => {
    let timea = new Date(a.createdDate).getTime(),
      timeb = new Date(b.createdDate).getTime();

    return timea > timeb ? -1 : 1;
  });
};

const CommentList: React.FC<{ comments: Comment[] }> = (props) => {
  const sorted = sortedCommentList(props.comments);
  const commentList = sorted.map((item) => (
    <CommentItem owner={item.owner} text={item.commentText} />
  ));
  return <ul>{commentList}</ul>;
};

export default CommentList;
