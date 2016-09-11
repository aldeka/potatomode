import React, { Component } from 'react';
import EatTracker from './components/eat/Tracker';
import SleepTracker from './components/sleep/Tracker';

import './App.css';
import './components/Tracker.css';
import './components/Logger.css';


class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h1>Potatomode</h1>
        </div>
        <div className="App-body">
          <EatTracker />
          <SleepTracker />
          <EatTracker />
        </div>
        { this.props.children }
      </div>
    );
  }
}

export default App;
