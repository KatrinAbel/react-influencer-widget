import React, { Component } from 'react';
import { css } from 'glamor';
import { List } from "react-virtualized";
import followerSuggestions from '../follower-suggestions.json';
import Card from './essentials/Card';
import Breakpoints, { cssMaxBreakpoint } from './appearance/Breakpoints';

const styles = {
  viewPort: css({
    margin: '40px',
    backgroundColor: '#fff',
    boxShadow: '0px 8px 21px 1px rgba(0, 0, 0, 0.15)',
    overflowY: 'scroll',
    overflowX: 'hidden',
    [cssMaxBreakpoint(Breakpoints.sm)]: {
      marginLeft: '0px',
      marginRight: '0px'
    }
  })
};

export class FollowWidget extends Component {

  constructor(props){
    super(props);
    this.state = {
      followerSuggestions: followerSuggestions,
      innerWidth: window.innerWidth
    };
    window.addEventListener('resize', this.onResize);
  }

  onResize = () => {
    this.setState({innerWidth: window.innerWidth})
  }

  createFollowerSuggestions = ({ index, style }) => (
    <div style={style}>
      <Card 
        style={style}
        influencer={this.state.followerSuggestions[index]}
        onClick={() => this.onFollowButtonClick(index)} 
        innerWidth={this.state.innerWidth}
      />
    </div>
  )

  onFollowButtonClick = (index) => {
    let followerSuggestions = this.state.followerSuggestions;
    followerSuggestions.splice(index, 1);
    this.setState({followerSuggestions: followerSuggestions});
  };

  render() {
    let width = this.state.innerWidth > 470 ? 470 : this.state.innerWidth
    const height = 500
    const rowHeight = 90

    return(
      <div {...styles.viewPort}>
          <List 
            width={width}
            height={height}
            rowHeight={rowHeight}
            rowRenderer={this.createFollowerSuggestions}
            rowCount={this.state.followerSuggestions.length}
          />
      </div>
    )
  }
};

export default FollowWidget;
