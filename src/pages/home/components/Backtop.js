import React, { PureComponent, Fragment } from 'react';
import { connect } from 'react-redux';
import { actionCreators } from '../store';
import {
  BackWrapper
} from '../style';

class BackTop extends PureComponent {
  render() {
    const { showScroll, handleScrollTop } = this.props;
    return (
      <Fragment>
      {
        showScroll ? <BackWrapper onClick={handleScrollTop}><i className='iconfont spin'>&#xe606;</i></BackWrapper> : null
      }
      </Fragment>
    ) 
  }
  componentDidMount() {
    window.addEventListener('scroll', this.props.handleShowScroll )
  }
  componentWillUnmount() {
    window.removeEventListener('scroll', this.props.handleShowScroll )
  }
}

const mapStateToProps = (state) => ({
  showScroll: state.getIn(['home', 'showScroll'])
});
const mapDispatchToProps = (dispatch) => {
  return {
    handleScrollTop() {
      let scrollToTop = window.setInterval(function() {
        let pos = window.pageYOffset;
        if (pos > 0) {
            window.scrollTo(0, pos-20);
        } else {
            window.clearInterval(scrollToTop);
        }
      }, 5);
    },
    handleShowScroll() {
      if(document.documentElement.scrollTop > 300) {
        dispatch(actionCreators.changeScrollAction(true));
      } else {
        dispatch(actionCreators.changeScrollAction(false));
      }
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(BackTop);