import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { Redirect, withRouter } from 'react-router-dom';
import {
  WriteWrapper,
  WriteTitle
} from './style';

class Write extends PureComponent {
  render() {
    const { logined } = this.props;
    if(logined) {
      return (
        <WriteWrapper>
          <WriteTitle>编写文章</WriteTitle>
        </WriteWrapper>
      )
    } else {
      return (
        <Redirect to="/login"></Redirect>
      )
    }
  }
}

const mapStateToProps = (state)=> ({
  logined: state.getIn(['login','logined'])
});

export default connect(mapStateToProps, null)(withRouter(Write));