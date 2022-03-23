import { useEffect } from 'react';
import { useParams, useRouteMatch } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../store/Store';
import { getBlogById } from '../../store/slices/BlogSlice';
import { unwrapResult } from '@reduxjs/toolkit';
import { useState } from 'react';
import { formatDate } from '../../helpers/ultis';
import Blog from '../../models/Blog';
import LoadingSpinner from '../common/LoadingSpinner';
import NoDataFound from '../common/NoDataFound';
import Comments from '../comments/Comments'

interface ParamTypes {
  blogId: string;
}

const BlogDetail = () => {
  const selector = useSelector((state: RootState) => state.blog);
  const dispatch = useDispatch<AppDispatch>();
  const params = useParams<ParamTypes>();
  const { blogId } = params;
  const [loadedBlog, setLoadedBlog] = useState<Blog>(
    new Blog('', '', '', '', '', '')
  );

  useEffect(() => {
    const fetchBlog = async () => {
      const data = await dispatch(getBlogById(blogId));
      setLoadedBlog(unwrapResult(data));
    };

    fetchBlog();
  }, [blogId, dispatch]);

  if (selector.isLoading) {
    return <LoadingSpinner />;
  }

  if (!!selector.error) {
    return <p className="centered">{selector.error}</p>;
  }

  if (!selector.isLoading && !loadedBlog) {
    return <NoDataFound />;
  }

  return (
    <div className="blog-detail">
      <div className="box-info">
        <img src={loadedBlog.authAvatar} alt="my" className="round-img" />
        <span className="name">{loadedBlog.author}</span>
        <span className="date">{formatDate(loadedBlog.createdDate)}</span>
      </div>
      <div dangerouslySetInnerHTML={{ __html: loadedBlog.content }}></div>
      <hr className="striped"/>
      <Comments />
    </div>
  );
};

export default BlogDetail;
