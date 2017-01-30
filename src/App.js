import React, { Component } from 'react';
import MatchCard from './MatchCard';

class App extends Component {
  render() {
    return (
        <div>
          <h1 className="md-text-center">
            Leicester City 2016-7
          </h1>
          <MatchCard />
        </div>
    );
  }
}

export default App;
