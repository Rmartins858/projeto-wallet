// Esse reducer será responsável por tratar as informações da pessoa usuária

import { SET_EMAIL } from '../actions/index';

const INITIAL_STATE = {
  email: '',
};

const myReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case SET_EMAIL:
    return ({
      ...state,
      email: action.email,
    });
  default:
    return state;
  }
};

export default myReducer;
