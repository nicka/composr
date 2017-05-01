import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';
import Home from './Home';
import Faq from './Faq';
import PageNotFound from './PageNotFound';
import ComposrPlusBandlab from './../assets/composr-bandlab.png';

const App = () => (
  <Router>
    <div>
      <img alt="BandLab Welcomes Composr" height="80" src={ComposrPlusBandlab} />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/faq" component={Faq} />
        <Route render={PageNotFound} />
      </Switch>
      © 2017 Composr
    </div>
  </Router>
);

export default App;
