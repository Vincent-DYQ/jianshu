import { fromJS } from 'immutable';
import * as actionTypes from './constants';

const defaultState = fromJS({
  logined: false
});

export default (state = defaultState, action) => {
  switch (action.type) {
    case actionTypes.CHANGE_LOGIN : 
      return state.set('logined', action.value)
    case actionTypes.CHANGE_LOGOUT : 
      return state.set('logined', action.value)
    default:
      return state;
  }
}