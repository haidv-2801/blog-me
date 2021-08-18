import SearchBar from '../components/pages/blog/SearchBar';
import BlogList from '../components/pages/blog/BlogList';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../store/Store';
import { useEffect } from 'react';
import { getListBlogs } from '../store/slices/BlogSlice';
import { useState } from 'react';
import { unwrapResult } from '@reduxjs/toolkit';
import Blog from '../models/Blog';

const BlogPage = () => {
  const selector = useSelector((state: RootState) => state.blog);
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    const fetchData = async () => {
      await dispatch(getListBlogs());
    };
    fetchData();
  }, []);

  return (
    <>
      <SearchBar />
      <BlogList items={selector.blogs} />
    </>
  );
};

export default BlogPage;
