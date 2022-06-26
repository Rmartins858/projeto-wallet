// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas

import { SET_CURRENCIES, SET_EXPENSES } from '../actions';

const INITTIAL_STATE = {
  currencies: [],
  expenses: [],
};
const walletReducer = (state = INITTIAL_STATE, action) => {
  switch (action.type) {
  case SET_CURRENCIES:
    return ({
      ...state,
      currencies: action.currencies,
    });
  case SET_EXPENSES:
    return ({
      ...state,
      expenses: [...state.expenses, { ...action.expenses },
      ],
    });
  default:
    return state;
  }
};

export default walletReducer;
