import { ADD_CARDS, DELETE_CARD } from '../type';

const CardsReducer = (state, action) => {
  switch (action.type) {
    case ADD_CARDS:
      return {
        ...state,
        cards: [...state.cards, action.payload],
      };

    case DELETE_CARD:
      return {
        ...state,
        cards: [...state.cards.filter((card) => card.id !== action.payload.id)],
      };
    default:
      return state;
  }
};

export default CardsReducer;
