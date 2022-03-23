import Blog from '../../models/Blog';
import { addBlog } from '../../store/slices/BlogSlice';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../store/Store';

import FormAdd from './FormAdd';

const AddNewBlog = () => {
  const dispatch = useDispatch<AppDispatch>();
  const selector = useSelector((state: RootState) => state.blog);

  const onAddHandler = async (data: any) => {
    const blogObj = new Blog(
      data.title,
      data.image,
      data.author,
      data.authorAvatar,
      data.contentSummary,
      data.content
    );

    console.log(blogObj);

    await dispatch(addBlog(blogObj));
    if(!selector.isLoading && selector.error === '') {
      alert("Added Successfully!");
    }
  };

  return (
    <>
      <div className="addnew">
        <FormAdd isLoading={selector.isLoading} onSubmit={onAddHandler} />
      </div>
    </>
  );
};

export default AddNewBlog;
