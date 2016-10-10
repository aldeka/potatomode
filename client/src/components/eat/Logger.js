import React, { Component } from 'react';


class EatLogger extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isBoob: true,
      startTime: undefined,
      endTime: undefined,
      amount: 0,
      rightBoob: false,
    };
    this.getForm = this.getForm.bind(this);
  }

  render () {
    return (
      <div className="overlay">
        <div className="Logger">
          <div className="Logger-header">
            New Feed Log
          </div>
          <div className="Logger-body">
            <div className="tab-wrapper">
              <div className="tab-button">
                <button className={`${ this.state.isBoob ? 'selected' : ''}`}
                        onClick={ () => { this.setState({ isBoob: true }); } }>
                  Breast
                </button>
                <button className={`${ !this.state.isBoob ? 'selected' : ''}`}
                        onClick={ () => { this.setState({ isBoob: false }); } }>
                  Bottle
                </button>
              </div>
              <div className="tab-body">
                { this.getForm() }
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  getForm () {
    if (this.state.isBoob) {
      return (
        <form>
          <div className="row-button">
            <button className={`${ !this.state.rightBoob ? 'selected' : ''}`}
                    onClick={ () => { this.setState({ rightBoob: false }); } }>
              L
            </button>
            <button className={`${ this.state.rightBoob ? 'selected' : ''}`}
                    onClick={ () => { this.setState({ rightBoob: true }); } }>
              R
            </button>
          </div>
          <div>
            <label>Start:</label>
            <span className="text">Now</span>
            <button>Edit</button>
          </div>
          <div>
            <label>End:</label>
            <button>Set End Time</button>
          </div>
          <div>
            <input type="submit" value="Done" />
          </div>
        </form>
      );
    } else {
      return (
        <div>bottttttttle</div>
      );
    }
  }
}

export default EatLogger;
