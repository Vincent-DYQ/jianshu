import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { Redirect, withRouter } from 'react-router-dom';
import { actionCreators } from './store';
import {
  LoginWrapper,
  LoginContainer,
  Input,
  Button
} from './style';

class Login extends PureComponent {
  render() {
    const { logined, handleLogin } = this.props;
    if(!logined) {
      return (
        <LoginWrapper>
          <LoginContainer>
            <Input type="text" innerRef={(input)=>{this.account = input}} placeholder="登录账户"/>
            <Input type="password" innerRef={(input)=>{this.password = input}} placeholder="登录密码"/>
            <Button onClick={()=>handleLogin(this.account, this.password)}>登录</Button>
          </LoginContainer>
        </LoginWrapper>
      )
    } else {
      return (
        <Redirect to="/"></Redirect>
      )
    }
  }
}

const mapStateToProps = (state)=> ({
  logined: state.getIn(['login','logined'])
});

const mapDispatchToProps = (dispatch)=> ({
  handleLogin(account, password) {
    dispatch(actionCreators.changeLogin(account.value, password.value))
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Login));