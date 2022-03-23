import React from 'react';
import Blog from '../../models/Blog';
import BlogItems from './BlogItems';

const BlogList: React.FC<{items: Blog[]}> = (props) => {
  
  const listBlogs = props.items.map((item) => <BlogItems key={item.id} item={item} />)

  return (
    <div className="bloglist">
      {listBlogs}
    </div>
  );
};

export default BlogList;
