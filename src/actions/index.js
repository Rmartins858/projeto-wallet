// Coloque aqui suas actions

const API_URL = 'https://economia.awesomeapi.com.br/json/all';

export const SET_EMAIL = 'SET_EMAIL';
export const SET_CURRENCIES = 'SET_CURRENCIES';
export const SET_EXPENSES = 'SET_EXPENSES';
export const EXCLUDE_EXPENSES = 'EXCLUDE_EXPENSES';
export const START_EDITING = 'START_EDITING';
export const UPDATE_EXPENSE = 'UPDATE_EXPENSE';

export const creatAtionEmail = (email) => ({
  type: SET_EMAIL,
  email,
});

export const isCurrencies = (currencies) => ({
  type: SET_CURRENCIES,
  currencies,
});

export const isExpenses = (expenses) => ({
  type: SET_EXPENSES,
  expenses,
});

export const isExclusion = (id) => ({
  type: EXCLUDE_EXPENSES,
  id,
});

export const editExpense = (id, exchangeRates) => ({
  type: START_EDITING,
  id,
  exchangeRates,
});

export const updateExpense = (expenses) => ({
  type: UPDATE_EXPENSE,
  expenses,
});

export const fetcAPI = () => async (dispatch) => {
  const api = await fetch(API_URL);
  const response = await api.json();
  dispatch(isCurrencies(Object.keys(response)
    .filter((res) => res !== 'USDT')));
};

export const fetchAPIglobal = (expenses) => async (dispatch) => {
  const api = await fetch(API_URL);
  const response = await api.json();
  expenses.exchangeRates = response;
  dispatch(isExpenses(expenses));
};
