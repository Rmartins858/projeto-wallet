// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas

import { SET_CURRENCIES,
  SET_EXPENSES,
  EXCLUDE_EXPENSES, START_EDITING, UPDATE_EXPENSE } from '../actions';

const INITTIAL_STATE = {
  currencies: [],
  expenses: [],
  expenseToEdit: {},
  editor: false, // valor booleano que indica de uma despesa está sendo editada
  idToEdit: 0, // valor numérico que armazena o id da despesa que esta sendo editada
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

  case START_EDITING:
    return ({
      ...state,
      editor: true,
      idToEdit: action.id,
      exchangeRates: action.exchangeRates,
    });

  case UPDATE_EXPENSE:
    return ({
      ...state,
      editor: false,
      expenses: state.expenses.map((e) => {
        if (e.id === action.expenses.id) {
          return action.expenses;
        }
        return e;
      }),
    });

  default:
    return state;
  }
};

export default walletReducer;
