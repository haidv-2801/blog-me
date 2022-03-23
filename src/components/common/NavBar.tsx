import React from 'react';
import BackDrop from './BackDrop';
import { uiActions } from '../../store/slices/UiSlice';
import { useHistory, useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../store/Store';
// import Loading from './Loading';

const NavBar: React.FC<{ isOpen: boolean, backdropOnClick: () => void }> = (props) => {
  const history = useHistory();
  const location = useLocation();
  // const selector = useSelector((state: RootState) => state.ui);
  const dispatch = useDispatch<AppDispatch>();

  const changePathHandler = (path: string) => {
    dispatch(uiActions.toggleLoading(true));
    dispatch(uiActions.toggleNav(false));
    // setTimeout(() => {
      history.replace(path);
    // }, 1300);
  };

  const stylesUl = props.isOpen ? ['nav', 'show'] : ['nav'];

  return (
    <>
      <ul className={stylesUl.join(' ')}>
        {[
          { name: 'Home', path: '/home' },
          { name: 'Blog', path: '/blogs' },
          { name: 'About', path: '/about' },
          { name: 'Contact', path: '/contact' },
        ].map((item) => (
          <li className={location.pathname === item.path ? "active" : " "} onClick={() => changePathHandler(item.path)} key={item.path}>
            {item.name}
          </li>
        ))}
      </ul>

      {props.isOpen && <BackDrop onClick = {props.backdropOnClick} />}
      {/* {selector.isLoading && <Loading />} */}
    </>
  );
};

export default NavBar;
