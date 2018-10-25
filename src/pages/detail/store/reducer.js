import { fromJS } from 'immutable';
import * as actionTypes from './constants';

const defaultState = fromJS({
  title: '',
  name: '',
  avatarUrl: '',
  meta: '',
  content: ''
});

export default (state = defaultState, action) => {
  switch (action.type) {
    case actionTypes.CHANGE_DETAIL: 
      return state.merge({
        title: action.title,
        name: action.name,
        avatarUrl: action.avatarUrl,
        meta: action.meta,
        motto: action.motto,
        content: action.content
      });
    default:
      return state;
  }
}