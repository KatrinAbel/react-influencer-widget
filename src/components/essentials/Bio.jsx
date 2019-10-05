import React from 'react';
import { css } from 'glamor';
import Breakpoints, { cssMaxBreakpoint } from './../appearance/Breakpoints';

const styles = {
  bioWrapper: css({
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'flex-start'
  }),
  name: css({
    width: '200px',
    fontSize: '16px',
    lineHeight: '25px',
    font: 'Roboto-Regular',
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    [cssMaxBreakpoint(Breakpoints.xs)]: {
      width: '130',
      fonSize: '14px'
    }
  }),
  description: css({
    width: '200px',
    fontSize: '14px',
    lineHeight: '21px',
    font: 'Roboto-Regular',
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    color: 'grey',
    [cssMaxBreakpoint(Breakpoints.xs)]: {
      width: '130px',
      fontSize: '12px'
    }
  })
};

const Bio = (props) => {
  return (
    <div {...styles.bioWrapper}>
      <div {...styles.name}>
        {props.name}
      </div>
      <div {...styles.description}>
        {props.description}
      </div>
    </div>
  )
};

export default Bio;
