import SearchBar from '../components/blogs/SearchBar';
import BlogList from '../components/blogs/BlogList';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../store/Store';
import { useEffect } from 'react';
import { getListBlogs } from '../store/slices/BlogSlice';
import LoadingSpinner from '../components/common/LoadingSpinner';
import NoDataFound from '../components/common/NoDataFound';

const BlogPage = () => {
  const selector = useSelector((state: RootState) => state.blog);
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(getListBlogs());
  }, [dispatch]);

  if(selector.isLoading) {
    return <LoadingSpinner />
  }

  if(!!selector.error) {
    return <p className="centered red">{selector.error}</p>
  }

  if(!selector.isLoading && selector.error !== '' && selector.blogs.length === 0) {
    return <NoDataFound />
  }

  return (
    <>
      <SearchBar />
      <BlogList items={selector.blogs} />
    </>
  );
};

export default BlogPage;
