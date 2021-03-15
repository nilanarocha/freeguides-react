import React from 'react';
import { HashRouter as Router, Route } from 'react-router-dom';
import Payment from './pages/Payment';
import AddCard from './pages/AddCard';
import { Box } from '@chakra-ui/react';
import CardsState from './context/cards/CardsState';

const Routes = (
  <CardsState>
    <Router>
      <Box>
        <Route exact path="/" component={AddCard} />
        <Route exact path="/payment" component={Payment} />
      </Box>
    </Router>
  </CardsState>
);

export default Routes;
