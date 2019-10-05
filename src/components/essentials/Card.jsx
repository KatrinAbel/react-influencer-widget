import React from 'react';
import { css } from 'glamor';
import Avatar from './Avatar';
import Bio from './Bio';
import Button from './Button';
import Breakpoints, { cssMaxBreakpoint } from './../appearance/Breakpoints';

const styles = {
  cardWrapper: css({
    fontFamily: 'Roboto, sans-serif',
    display: 'flex',
    justifyContent: 'space-between',
    height: '60px',
    padding: '15px 25px',
    border: '1px solid #F5F5F5',
    [cssMaxBreakpoint(Breakpoints.xs)]: {
      padding: '15px 15px'
    }
  })
};

const Card = (props) => {
  const {username, profilePicture, biography} = props.influencer;

  return (
    <div {...styles.cardWrapper} >
      <Avatar 
        src={profilePicture}
        alt={username}
      />
      <Bio 
        name={`@${username}`}
        description={biography}
      />
      <Button 
        text={'Follow'}
        src={'../icon-follow.svg'}
        alt={'icon-follow'}
        onClick={() => props.onClick()}
        innerWidth={props.innerWidth}
      />
    </div>
  )
};

export default Card;
