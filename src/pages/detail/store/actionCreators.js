import axios from 'axios';
import * as actionTypes from './constants';

const changeDetail = (title, name, avatarUrl, meta, motto, content)=> ({
  type: actionTypes.CHANGE_DETAIL,
  title,
  name,
  avatarUrl,
  meta,
  motto,
  content
})

export const getDetail = (id)=> {
  return (dispatch)=> {
    axios.get('/api/detail.json?id='+id).then((res)=>{
      const data = res.data.data;
      dispatch(changeDetail(data.title, data.name, data.avatarUrl, data.meta, data.motto, data.content));
    }).catch((err)=>{
      console.log('网络请求失败')
    })
  }
}