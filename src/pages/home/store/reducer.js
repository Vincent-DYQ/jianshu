import { fromJS } from 'immutable';
import * as actionTypes from './constants';

const defaultState = fromJS({
  topicList: [],
  articleList: [],
  recommendList: [],
  writerList: [],
  articlePage: 1,
  showScroll: false
});

const changeData = (state, action) => {
  return state.merge({
    topicList: fromJS(action.topicList),
    articleList: fromJS(action.articleList),
    recommendList: fromJS(action.recommendList),
    writerList: fromJS(action.writerList)
  })
};

const moreData = (state, action) => {
  return state.merge({
    articlePage: action.nextPage,
    articleList: state.get('articleList').concat(action.list)
  })
}

export default (state = defaultState, action) => {
  switch (action.type) {
    case actionTypes.CHANGE_DATA:
      return changeData(state, action);
    case actionTypes.MORE_DATA:
      return moreData(state, action);
    case actionTypes.SCROLL_CHANGE:
      return state.set('showScroll', action.flag)
    default:
      return state;
  }
}