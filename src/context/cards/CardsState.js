import React, { useReducer } from 'react';
import CardsReducer from './CardsReducer';
import CardsContext from './CardsContext';
import { ADD_CARDS, DELETE_CARD } from '../type';

const CardsState = ({ children }) => {
  const initialState = {
    cards: [
      { type: 'VisaPlatinum', id: '1' },
      { type: 'Mastercard', id: '2' },
    ],
  };
  const [state, dispatch] = useReducer(CardsReducer, initialState);

  const setCards = (card) => {
    try {
      console.log(card);
      dispatch({
        type: ADD_CARDS,
        payload: card,
      });
    } catch (error) {
      console.error(error);
    }
  };

  const deleteCard = (card) => {
    try {
      dispatch({
        type: DELETE_CARD,
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
        setCards,
        deleteCard,
      }}
    >
      {children}
    </CardsContext.Provider>
  );
};
export default CardsState;
