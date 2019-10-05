import React from 'react';
import { css } from 'glamor';
import Breakpoints, { cssMaxBreakpoint } from './../appearance/Breakpoints';

const styles = {
  btn: css({
    display: 'flex',
    margin: '15px 0px 15px 20px',
    padding: '8px 14px',
    backgroundColor: '#0080FF',
    borderRadius: '1px',
    cursor: 'pointer',
    ':hover': {
      backgroundColor: '#044FB3'
    },
    [cssMaxBreakpoint(Breakpoints.xs)]: {
      margin: '15px 15px 15px 10px'
    }
  }),
  btnIcon: css({
    width: '16px',
    height: '16px',
    marginRight: '10px',
  }),
  btnText: css({
    color: '#fff',
    font: 'Roboto-Regular',
    fontSize: '14px',
    lineHeight: '14px',
  })
};

const Button = (props) => {

  const smallButton = (
    <div 
      {...styles.btn} 
      onClick={() => props.onClick()} 
    >
      <div {...styles.btnText}>
        {props.text}
      </div>
    </div>
  );

  const largeButton = (
    <div 
      {...styles.btn} 
      onClick={() => props.onClick()} 
    >
      <img 
        {...styles.btnIcon}
        src={props.src}
        alt={props.alt}
      />
      <div {...styles.btnText}>
        {props.text}
      </div>
    </div>
  );

  return (
    (props.innerWidth > Breakpoints.xs) ? largeButton : smallButton
  );
};

export default Button;
