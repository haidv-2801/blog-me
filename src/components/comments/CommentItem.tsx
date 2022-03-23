import React from 'react';
import { useContext } from 'react';
import { User } from 'react-feather';
import { AuthContext } from '../../contexts/auth-context';

const CommentItem: React.FC<{ owner: string; text: string }> = (props) => {
  const authCtx = useContext(AuthContext);
  return (
    <li className="comment-item">
      <span className="comment-user">
        <User size="2rem" />
      </span>
      <span>
        <div
          className={`${
            authCtx.isLoggedIn ? 'owner-name isAuthenicated' : 'owner-name'
          }`}
        >
          {props.owner}
        </div>
        <div className="comment-text">{props.text}</div>
      </span>
    </li>
  );
};

export default CommentItem;
