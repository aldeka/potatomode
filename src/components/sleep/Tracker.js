import React, { Component } from 'react';
import moment from 'moment';

import LogButton from '../LogButton';
import LogTime from '../LogTime';


class SleepTracker extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {
        startTime: moment().subtract(40, 'minutes'),
        endTime: undefined
      }
    };
    this.log = this.log.bind(this);
  }

  render () {
    const displayTime = this.state.data.endTime ? this.state.data.endTime : this.state.data.startTime;
    return (
      <div className="Tracker-body">
        <div className="latest-item">
          <div className="icon">(icon)</div>
          <LogTime inProgress={ !this.state.data.endTime }
                   time={ displayTime } />
        </div>
        <LogButton cb={ this.log }
                   inProgress={ !this.state.data.endTime }/>
      </div>
    );
  }

  log () {
    console.log('click sleep');
  }
}

export default SleepTracker;
