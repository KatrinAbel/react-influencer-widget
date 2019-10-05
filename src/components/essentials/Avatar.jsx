import React from 'react';
import { css } from 'glamor';
import Breakpoints, { cssMaxBreakpoint } from './../appearance/Breakpoints';

const styles = {
  avatarWrapper: css({
    height: '60px',
    width: '60px',
    marginRight: '20px',
    borderRadius: '50%',
    [cssMaxBreakpoint(Breakpoints.xs)]: {
      marginRight: '10px'
    }
  })
};

const Avatar = (props) => {
  return (
    <div>
      <img 
        {...styles.avatarWrapper} 
        src={props.src} 
        alt={props.alt}
      />
    </div>
  )
};

export default Avatar;
