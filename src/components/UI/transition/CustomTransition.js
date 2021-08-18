import React from 'react';
import CSSTransition from 'react-transition-group/CSSTransition';
import classes from './CustomTransition.module.css'

const animationTiming = {
  enter: 400,
  exit: 400,
};

const CustomTransition = (props) => {
  return (
    <CSSTransition
      mountOnEnter
      unmountOnExit
      in={props.show}
      timeout={animationTiming}
      classNames={{
        enter: '',
        enterActive: classes['modal-open'],
        exit: '',
        exitActive: classes['modal-close'],
      }}
    >
      {props.children}
    </CSSTransition>
  );
};

export default CustomTransition;
