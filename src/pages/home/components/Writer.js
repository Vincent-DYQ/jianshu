import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import {
  WriterWrapper,
  WriterList,
  WriterTitle,
  WriterSwitch,
  WriterItem
} from '../style';

class Writer extends PureComponent {
  render() {
    const { list, handleChangeWriter } = this.props;
    return (
      <WriterWrapper>
        <WriterTitle>
          推荐作者
          <WriterSwitch onClick={()=>{handleChangeWriter(this.icon)}}>
            <i ref={(icon)=>{this.icon=icon}} className='iconfont spin'>&#xe851;</i> 换一批
          </WriterSwitch>
        </WriterTitle>
        <WriterList>
          {
            list.map((item)=>(
              <WriterItem key={item.get('id')}>
                <a href={item.get('url')} className='avatar'>
                  <img className='avater-pic' src={item.get('imgUrl')} alt=''/>
                </a>
                <span className='follow'>
                  <i className='iconfont'>&#xe607;</i>
                  关注
                </span>
                <p className='name'>{item.get('name')}</p>
                <p className='like'>{item.get('desc')}</p>
              </WriterItem>
            ))
          }
        </WriterList>
        <a href='/' className='find_more'>查看全部 ></a>
      </WriterWrapper>
    )
  }
}

const mapStateToProps = (state) => ({
  list: state.getIn(['home', 'writerList'])
});
const mapDispatchToProps = () => {
  return {
    handleChangeWriter(spin) {
      let originAngel = spin.style.transform.replace(/[^0-9]/ig,'');
      if(originAngel) {
        originAngel = parseInt(originAngel, 10);
      } else {
        originAngel = 0;
      };
      spin.style.transform = 'rotate(' + ( originAngel + 360 ) + 'deg)';
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Writer);