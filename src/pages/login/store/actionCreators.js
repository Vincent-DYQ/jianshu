import axios from 'axios';
import * as actionTypes from './constants';

const getLoginAction = (value)=> ({
  type: actionTypes.CHANGE_LOGIN,
  value
});

export const handleLogout = (value)=> ({
  type: actionTypes.CHANGE_LOGOUT,
  value
});

export const changeLogin = (account, password)=> {
  return (dispatch)=> {
    axios.get('/api/login.json?account='+account+'&password='+password).then((res)=>{
      dispatch(getLoginAction(true));
    }).catch((err)=>{
      console.log('网络请求失败');
    })
  }
}