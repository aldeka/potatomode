import React, { Component } from 'react';
//import moment from 'momentjs'; // nope
//const moment = require('momentjs'); // nope
const moment = require('momentjs/moment.js'); // still nope :( :( :(


class App extends Component {
  render() {
    let testDate = moment([2007, 1, 29]); // example date used in http://momentjs.com/docs/#/displaying/fromnow/
    return (
      <div>
        <h1>Hello world.</h1>
        <h2>{ testDate.format() }</h2>
        { false && <h2>{ testDate.fromNow() }</h2> }
      </div>
    );
  }
}

export default App;
