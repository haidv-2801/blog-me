import NavBar from '../common/NavBar';
import { AppDispatch, RootState } from '../../store/Store';
import { useDispatch, useSelector } from 'react-redux';
import { Menu } from 'react-feather';
import { uiActions } from '../../store/slices/UiSlice';

const Header = () => {
  const dispatch = useDispatch<AppDispatch>();
  const selector = useSelector((state: RootState) => state.ui);

  const navToggleHandler = () => {
    dispatch(uiActions.toggleNav(!selector.navIsOpen));
  }

  const onCloseBackdropHandler = () => {
    dispatch(uiActions.toggleNav(false));
  }

  return (
    <div className="header">
      <span className="header__name">DO VAN HAI</span>
      <NavBar backdropOnClick={onCloseBackdropHandler} isOpen={selector.navIsOpen} />
      <Menu onClick={navToggleHandler} color="#fff" className="header__menu icon" size="2rem" />
    </div>
  );
};

export default Header;
