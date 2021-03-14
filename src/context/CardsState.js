import React, { useReducer } from 'react';
import CardsReducer from './CardsReducer';
import CardsContext from './CardsContext';
import { ADD_CARD } from './types';

const CardsState = ({ children }) => {
  const initialState = {
    cards: [
      { type: 'Visa Platinum', id: '1' },
      { type: 'Mastercard', id: '2' },
      { type: 'American Express', id: '3' },
    ],
  };
  const [state, dispatch] = useReducer(CardsReducer, initialState);

  const addCard = (card) => {
    try {
      dispatch({
        type: ADD_CARD,
        payload: card,
      });
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <CardsContext.Provider
      value={{
        cards: state.cards,
        addCard,
      }}
    >
      {children}
    </CardsContext.Provider>
  );
};
export default CardsState;
