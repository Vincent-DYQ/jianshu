import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { CSSTransition } from 'react-transition-group';
import { actionCreators } from './store';
import { actionCreators as loginActionCreators } from '../../pages/login/store';
import { 
  HeaderTotal,
  HeaderWrapper,
  Logo,
  Nav,
  NavItem,
  SeachWrapper,
  NavSearch,
  SearchInfo,
  SearchInfoTitle,
  SearchInfoSwitch,
  SearchInfoList,
  SearchInfoItem,
  Addition,
  Button
} from './style';

class Header extends PureComponent {
  getSearchBoard() {
    const { focused, hotList, page, totalPage, mouseIn, handleMouseEnter, handleMouseLeave, handleChangeHot } = this.props;
    const pageList = [];
    const newList = hotList.toJS();

    if(newList.length){
      for (let i = (page-1)*10; i < page*10; i++) {
        if(newList[i]) {
          pageList.push(<SearchInfoItem key={newList[i]}>{newList[i]}</SearchInfoItem>)
        }
      };
    }

    if(focused || mouseIn) {
      return (
        <SearchInfo 
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <SearchInfoTitle>
            热门搜索
            <SearchInfoSwitch onClick={()=>{handleChangeHot(page,totalPage,this.icon)}}>
            <i ref={(icon)=>{this.icon=icon}} className='iconfont spin'>&#xe851;</i> 换一批
            </SearchInfoSwitch>
          </SearchInfoTitle>
          <SearchInfoList>
          { pageList }
          </SearchInfoList>
        </SearchInfo>
      );
    } else {
      return null;
    }
  }

  render() {
    const { logined, focused, hotList, handleInputFocus, handleInputBlur, handleLogout } = this.props;
    return (
      <HeaderTotal>
        <HeaderWrapper>
          <Link to='/'>
            <Logo/>
          </Link>
          <Nav>
            <Link to="/">
              <NavItem className='left active'>首页</NavItem>
            </Link>
            
            <NavItem className='left'>下载App</NavItem>
            {
              logined ? <NavItem onClick={handleLogout} className='right'>退出</NavItem> : <Link to="/login"><NavItem className='right'>登录</NavItem></Link>
            }
            <NavItem className='right'>
              <i className='iconfont'>&#xe636;</i> 
            </NavItem>
            <SeachWrapper>
              <CSSTransition
                in={focused}
                timeout={200}
                classNames='slide'
              >
                <NavSearch 
                  className={focused ? 'focused' : ''}
                  onFocus={()=> {handleInputFocus(hotList)}}
                  onBlur={handleInputBlur}
                >
                </NavSearch>
              </CSSTransition>
              <i className={focused ? 'focused iconfont zoom' : 'iconfont zoom'}>&#xe623;</i> 
              { this.getSearchBoard() }
            </SeachWrapper>
          </Nav>
          <Addition>
            <Link to='/write'>
              <Button className='write'><i className='iconfont'>&#xe61c;</i> 写文章</Button>
            </Link>
            <Link to='/login'>
              <Button className='reg'>注册</Button>
            </Link>
          </Addition>
        </HeaderWrapper>
      </HeaderTotal>
    )
  }
}
 
const mapStateToProps = (state) => {
  return {
    focused: state.getIn(['header', 'focused']),
    mouseIn: state.getIn(['header', 'mouseIn']),
    hotList: state.getIn(['header', 'hotList']),
    page: state.getIn(['header', 'page']),
    totalPage: state.getIn(['header', 'totalPage']),
    logined: state.getIn(['login', 'logined'])
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    handleInputFocus(list) {
      (list.size === 0) && dispatch(actionCreators.getHotList());
      dispatch(actionCreators.searchFocusAction());
    },
    handleInputBlur() {
      dispatch(actionCreators.searchBlurAction());
    },
    handleMouseEnter() {
      dispatch(actionCreators.mouseEnterAction());
    },
    handleMouseLeave() {
      dispatch(actionCreators.mouseLeaveAction());
    },
    handleChangeHot(page, totalPage, spin) {
      let originAngel = spin.style.transform.replace(/[^0-9]/ig,'');
      if(originAngel) {
        originAngel = parseInt(originAngel, 10);
      } else {
        originAngel = 0;
      };
      spin.style.transform = 'rotate(' + ( originAngel + 360 ) + 'deg)';
      if(page < totalPage) {
        dispatch(actionCreators.changePageAction(page+1));
      } else {
        dispatch(actionCreators.changePageAction(1));
      }
    },
    handleLogout() {
      dispatch(loginActionCreators.handleLogout(false));
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);