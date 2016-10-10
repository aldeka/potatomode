import React from 'react';
import { render } from 'react-dom';
import { Router, Route, browserHistory } from 'react-router';

import App from './App';
import EatLogger from './components/eat/Logger';
import SleepLogger from './components/sleep/Logger';
import PoopLogger from './components/poop/Logger';

import './index.css';

// ReactDOM.render(
//   <App />,
//   document.getElementById('root')
// );

render((
  <Router history={ browserHistory }>
    <Route path="/" component={App}>
      <Route path="/eat/log" component={EatLogger}/>
      <Route path="/sleep/log" component={SleepLogger}/>
      <Route path="/poop/log" component={PoopLogger}/>
      <Route path="*" component={App}/>
    </Route>
  </Router>
), document.getElementById('root'));
