import axios from 'axios';
import { fromJS } from 'immutable';
import * as actionTypes from './constants';

const getHomeAction = (data)=> ({
  type: actionTypes.CHANGE_DATA,
  topicList: data.topicList,
  articleList: data.articleList,
  recommendList: data.recommendList,
  writerList: data.writerList
})

const getMoreAction = (list, nextPage)=> ({
  type: actionTypes.MORE_DATA,
  list: fromJS(list),
  nextPage
})

export const changeScrollAction = (flag)=> ({
  type: actionTypes.SCROLL_CHANGE,
  flag
});

export const getHomeList = ()=> {
  return (dispatch)=> {
    axios.get('/api/home.json').then((res)=>{
      const data = res.data.data;
      dispatch(getHomeAction(data));
    }).catch((err)=>{
      console.log('网络请求失败')
    })
  }
}

export const loadMoreList = (page)=> {
  return (dispatch)=> {
    axios.get('/api/homeList.json?page='+page).then((res)=>{
      const data = res.data.data;
      dispatch(getMoreAction(data, page+1));
    }).catch((err)=>{
      console.log('网络请求失败')
    })
  }
}