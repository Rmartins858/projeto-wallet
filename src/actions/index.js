// Coloque aqui suas actions

const API_URL = 'https://economia.awesomeapi.com.br/json/all';

export const SET_EMAIL = 'SET_EMAIL';
export const SET_CURRENCIES = 'SET_CURRENCIES';

export const creatAtionEmail = (email) => ({
  type: SET_EMAIL,
  email,
});

export const isCurrencies = (currencies) => ({
  type: SET_CURRENCIES,
  currencies,
});

export const fetcAPI = () => async (dispatch) => {
  const api = await fetch(API_URL);
  const response = await api.json();
  dispatch(isCurrencies(Object.keys(response)
    .filter((res) => res !== 'USDT')));
};
