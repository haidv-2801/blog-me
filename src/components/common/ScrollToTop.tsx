import React, { useEffect, useState } from 'react';
import { ChevronUp } from 'react-feather';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../../store/Store';
import { uiActions } from '../../store/slices/UiSlice';

export default function ScrollToTop() {
  const dispatch = useDispatch<AppDispatch>();
  const [isVisible, setIsVisible] = useState(false);

  const scrollToTop = () => {
    // window.scrollTo({
    //   top: 0,
    //   behavior: 'smooth',
    // });

    const c = document.documentElement.scrollTop || document.body.scrollTop;
    if (c > 0) {
      window.requestAnimationFrame(scrollToTop);
      window.scrollTo(0, c - c / 8);
    }
  };

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 500) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }

      if (window.pageYOffset > 1) {
        dispatch(uiActions.isScrolled(true));
      } else {
        dispatch(uiActions.isScrolled(false));
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, [dispatch]);

  return (
    <>
      {isVisible && (
        <span className="scroll-to-top" onClick={scrollToTop}>
          <ChevronUp className="icon" color="#fff" size="2rem" />
        </span>
      )}
    </>
  );
}
