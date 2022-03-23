import NavBar from '../common/NavBar';
import { AppDispatch, RootState } from '../../store/Store';
import { useDispatch, useSelector } from 'react-redux';
import { Menu } from 'react-feather';
import { uiActions } from '../../store/slices/UiSlice';

const Header = () => {
  const dispatch = useDispatch<AppDispatch>();
  const selector = useSelector((state: RootState) => state.ui);

  const { isScrolled } = selector;

  const navToggleHandler = () => {
    dispatch(uiActions.toggleNav(!selector.navIsOpen));
  };

  const onCloseBackdropHandler = () => {
    dispatch(uiActions.toggleNav(false));
  };

  return (
    <div className={`header ${isScrolled ? 'header-scrolled' : ' '}`}>
      <span className="header__name">HaiDo</span>
      <NavBar
        backdropOnClick={onCloseBackdropHandler}
        isOpen={selector.navIsOpen}
      />
      <div className="header-icon-menu">
        <Menu
          onClick={navToggleHandler}
          color="#fff"
          className="header__menu icon"
          size="2rem"
        />
      </div>
    </div>
  );
};

export default Header;
