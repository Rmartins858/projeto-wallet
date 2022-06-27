// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas

import { SET_CURRENCIES, SET_EXPENSES, EXCLUDE_EXPENSES } from '../actions';

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
  case EXCLUDE_EXPENSES:
    return ({
      ...state,
      expenses: state.expenses.filter(({ id }) => action.id !== id) // Requisito 9 realizado com a ajuda Jessy Damasceno. Turma 21 - Tribo A.
      ,
    });
  default:
    return state;
  }
};

export default walletReducer;
