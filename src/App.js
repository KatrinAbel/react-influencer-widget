import React from 'react';
import FollowWidget from './components/FollowWidget';

const styles = {
  appWrapper: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  }
}

function App() {
  return (
    <div style={styles.appWrapper}>
      <FollowWidget/>
    </div>
  );
}

export default App;
