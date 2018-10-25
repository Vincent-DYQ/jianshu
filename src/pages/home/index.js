import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { actionCreators } from './store';
import Topic from './components/Topic';
import List from './components/List';
import Recommend from './components/Recommend';
import Download from './components/Download';
import Writer from './components/Writer';
import BackTop from './components/Backtop';
import {
  HomeWrapper,
  HomeLeft,
  HomeRight
} from './style'

class Home extends PureComponent {
  render() {
    document.title = `简书 - 创作你的创作`;
    return (
      <HomeWrapper>
        <HomeLeft>
          <img className='home-banner' src="//upload.jianshu.io/admin_banners/web_images/4514/92d2dd710492c4eb87b511016294120ad1d52095.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540" alt=""/>
          <Topic />
          <List />
        </HomeLeft>
        <HomeRight>
          <Recommend />
          <Download />
          <Writer />
        </HomeRight>
        <BackTop></BackTop>
      </HomeWrapper>
    )
  }
  componentDidMount() {
    this.props.handleChangeData();
  }
}

const mapDispatchToProps = (dispatch)=> ({
  handleChangeData() {
    dispatch(actionCreators.getHomeList());
  }
});

export default connect(null, mapDispatchToProps)(Home);