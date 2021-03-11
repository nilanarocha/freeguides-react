import React from 'react';
import { HashRouter as Router, Route } from 'react-router-dom';
import CurrentPage from './pages/CurrentPage';
import NewsPage from './pages/NewsPage';

const Routes = (
  <Router>
    {/* Home */}
    <Route exact path="/" component={CurrentPage} />
    <Route exact path="/card" component={Card} />
  </Router>
);

export default Routes;
