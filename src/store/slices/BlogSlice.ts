import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import Blog from '../../models/Blog';
import BlogApi from '../../api/BlogApi';

type blogsType = {
  blogs: Blog[];
  isLoading: boolean;
  error: string;
};

const defaultValue: blogsType = {
  blogs: [],
  isLoading: false,
  error: '',
};

export const getListBlogs = createAsyncThunk('GET_LIST_BLOG', async () => {
  const blogs = await BlogApi.getAll();
  return blogs;
});

export const addBlog = createAsyncThunk('ADD_BLOG', async (body: Blog) => {
  const blogs = await BlogApi.add(body);
  return blogs;
});

const blogSlice = createSlice({
  name: 'blog',
  initialState: defaultValue,
  reducers: {},
  extraReducers: {
    //getListBlog
    [getListBlogs.fulfilled as any]: (state, action) => {
      state.blogs = [];
      for (const key in action.payload) {
        state.blogs.push(action.payload[key]);
      }
      state.isLoading = false;
    },
    [getListBlogs.pending as any]: (state) => {
      state.isLoading = true;
    },
    [getListBlogs.rejected as any]: (state, action) => {
      state.isLoading = false;
      state.error = action.error;
    },

    //addnewblog
    [addBlog.fulfilled as any]: (state) => {
      state.isLoading = false;
    },
    [addBlog.pending as any]: (state) => {
      state.isLoading = true;
    },
    [addBlog.rejected as any]: (state) => {
      state.isLoading = false;
    },
  },
});

export const blogActions = blogSlice.actions;
export default blogSlice.reducer;
