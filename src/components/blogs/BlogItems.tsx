import React from 'react';
import Blog from '../../models/Blog';
import { Clock, User } from 'react-feather';
import { useHistory } from 'react-router-dom';
import { formatDate } from '../../helpers/ultis';

const BlogItems: React.FC<{ item: Blog }> = (props) => {
  const history = useHistory();
  const { id, title, image, author, contentSummary, createdDate } = props.item;

  const viewHandler = () => {
    history.push(`blogs/${id}`);
  };

  return (
    <div className="card">
      <img src={image} className="card-head" alt="img"></img>
      <div className="card-content">
        <p onClick={viewHandler} className="card-title row" title={title}>
          {title}
        </p>
        <div className="card-meta row">
          <User stroke="#8e8e95" size="12px" />
          {author}&nbsp;-&nbsp;
          <Clock stroke="#8e8e95" size="12px" />
        {formatDate(createdDate)}
        </div>
        <p className="card-text row">{contentSummary}</p>
        <div className="card-btn row">
          <button onClick={viewHandler}>Xem thêm</button>
        </div>
      </div>
    </div>
  );
};

export default BlogItems;
