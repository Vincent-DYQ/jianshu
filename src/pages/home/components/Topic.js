import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import {
  TopicWrapper,
  TopicItem
} from '../style';

class Topic extends PureComponent {
  render() {
    const { list } = this.props;
    return (
      <TopicWrapper>
        {
          list.map((item)=>(
            <TopicItem key={item.get('id')}>
              <img className='topic-img' src={item.get('imgUrl')} alt=''/>
              {item.get('title')}
            </TopicItem>
          ))
        }
        <a className='more' href="/">更多热门专题 ></a>
      </TopicWrapper>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    list: state.getIn(['home','topicList'])
  }
}

export default connect(mapStateToProps, null)(Topic);