import React, { Component } from 'react';
import moment from 'moment';


class LogTime extends Component {
  render () {
    let minutes = moment().diff(moment(this.props.time), 'minutes');
    let hours = Math.floor(minutes / 60);
    minutes %= 60;
    return (
        <div className={`time ${ !this.props.inProgress ? 'in-progress' : ''}`}>
          { !this.props.inProgress && <span className="in-progress-label">start:</span> }
          <span>{ `${ hours ? hours.toString() + 'h' : ''}${minutes}m` }</span>
        </div>
    );
  }
}

LogTime.propTypes = {
  time: React.PropTypes.object.isRequired,
  inProgress: React.PropTypes.bool
};

export default LogTime;
