import { useEffect, useState } from 'react';
 import { useDispatch } from 'react-redux';
import { uiActions } from '../../store/slices/UiSlice';

const Loading = () => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const [row1, setRow1] = useState(false);
  const [row2, setRow2] = useState(false);
  const [row3, setRow3] = useState(false);

  useEffect(() => {
    setRow2(true);
    setTimeout(() => {
      setLoading(true);
    }, 800);
    setTimeout(() => {
      setRow1(true);
      setRow3(true);
    }, 1300);
    setTimeout(() => {
      setRow2(false);
    }, 2300);
    setTimeout(() => {dispatch(uiActions.toggleLoading(false));}, 3100);
  }, [dispatch]);

  return (
    <div className="container-loading">
      <div className={loading ? 'loading active' : 'loading'}>
        <div className={row1 ? 'row1 active' : 'row1'}>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>
        <div className={row2 ? 'row2 active' : 'row2'}>
          <span></span>
        </div>
        <div className={row3 ? 'row3 active' : 'row3'}>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </div>
  );
};

export default Loading;
