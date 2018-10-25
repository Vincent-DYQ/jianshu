import * as actionTypes from './constants';
import { fromJS } from 'immutable';
import axios from 'axios';

const hotListAction = (data) => ({
  type: actionTypes.CHANGE_HOT_LIST,
  data: fromJS(data),
  totalPage: Math.ceil(data.length / 10)
});

export const searchFocusAction = () => ({
  type: actionTypes.SEARCH_FOCUS
});

export const searchBlurAction = () => ({
  type: actionTypes.SEARCH_BLUR
});

export const mouseEnterAction = () => ({
  type: actionTypes.MOUSE_ENTER
});

export const mouseLeaveAction = () => ({
  type: actionTypes.MOUSE_LEAVE
});

export const changePageAction = (page) => ({
  type: actionTypes.CHANGE_PAGE,
  page
});

export const getHotList = () => {
  return (dispatch) => {
    axios.get('/api/hotlist.json').then((res)=>{
      const data = res.data;
      dispatch(hotListAction(data.data));
    }).catch((err)=>{
      console.log("网络请求失败");
    })
  }
}