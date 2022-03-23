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

export const getBlogById = createAsyncThunk(
  'GET_BLOG_BY_ID',
  async (id: string) => {
    const blog = await BlogApi.getById(id);
    return blog;
  }
);

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
      state.blogs = action.payload;
      state.isLoading = false;
    },
    [getListBlogs.pending as any]: (state) => {
      state.isLoading = true;
    },
    [getListBlogs.rejected as any]: (state, action) => {
      state.isLoading = false;
      state.error = action.error;
    },

    //getbyid
    [getBlogById.fulfilled as any]: (state) => {
      state.isLoading = false;
    },
    [getBlogById.pending as any]: (state) => {
      state.isLoading = true;
    },
    [getBlogById.rejected as any]: (state, action) => {
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
