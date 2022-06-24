// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas

import { SET_CURRENCIES } from '../actions';

const INITTIAL_STATE = {
  currencies: [],
};
const walletReducer = (state = INITTIAL_STATE, action) => {
  switch (action.type) {
  case SET_CURRENCIES:
    return ({
      ...state,
      currencies: action.currencies,
    });
  default:
    return state;
  }
};

export default walletReducer;
