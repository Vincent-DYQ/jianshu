import React, { PureComponent, Fragment } from 'react';
import { actionCreators } from './store';
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux';
import Floatqr from './components/FloatDownload';
import Backtop from '../home/components/Backtop';
import {
  DetailWrapper,
  Header,
  Author,
  AuthorAvatar,
  AuthorInfo,
  Content,
  Reward,
  AuthorDetail,
  AuthorDesc,
  DownloadApp,
  CommentWrapper,
  CommentTitle,
  CommentList,
  CommentItem,
  CommentContent,
  CommentTool
} from './style';


class Detail extends PureComponent {
  render() {
    const { title, name, avatarUrl, meta, motto, content } = this.props;
    document.title = `${title} - 简书`;
    return (
      <Fragment>
        <Backtop></Backtop>
        <DetailWrapper>
          <Floatqr></Floatqr>
          <Header>{title}</Header>
          <Author>
            <AuthorAvatar>
              <img src={avatarUrl} alt=""/>
            </AuthorAvatar>
            <AuthorInfo>
              <span className='name'><a href="/">{name}</a></span>
              <a href="/" className='follow'>
                <i className='iconfont'>&#xe607;</i>
                <span>关注</span>
              </a>
              <p className='meta'>{meta}</p>
            </AuthorInfo>
          </Author>
          <Content dangerouslySetInnerHTML={{__html: content}} />
          <Reward>
            <p>小礼物走一走，来简书关注我</p>
            <p className='btn-pay'>赞赏支持</p>
          </Reward>
          <AuthorDetail>
            <AuthorAvatar>
              <img src={avatarUrl} alt=""/>
            </AuthorAvatar>
            <AuthorInfo>
              <span className='name'><a href="/">{name}</a></span>
              <p className='meta'>{meta}</p>
              <a href="/" className='follow big-follow'>
                <i className='iconfont'>&#xe607;</i>
                <span>关注</span>
              </a>
            </AuthorInfo>
            <AuthorDesc>{motto}</AuthorDesc>
          </AuthorDetail>
          <DownloadApp></DownloadApp>
          <CommentWrapper>
            <CommentTitle>
              <span>4条评论</span>
              <a href="/" className='author-only'>只看作者</a>
              <div className='pull-right'>
                <a href="/"  className='time active'>按时间倒序</a>
                <a href="/" className='time'>按时间升序</a>
              </div>
            </CommentTitle>
            <CommentList>
              <CommentItem>
                <AuthorAvatar>
                <img src={avatarUrl} alt=""/>
                </AuthorAvatar>
                <AuthorInfo>
                  <span className='name'><a href="/">逆转王牌</a></span>
                  <p className='meta'>10楼 · 2018.10.13 15:08</p>
                </AuthorInfo>
                <CommentContent>以前在大学机房里最普遍的病毒就是把U盘所有文件放到一个.命名的隐藏文件夹里，简单的显示隐藏文件就好了，很多人不知道就选择格式化U盘，所有的资料都只能重新再弄……</CommentContent>
                <CommentTool>
                  <span className='zan'>
                    <i className='iconfont'>&#xe62b;</i>
                    <span>赞</span>
                  </span>
                  <span className='answer'>
                    <i className='iconfont'>&#xe602;</i>
                    <span>回复</span>
                  </span>
                </CommentTool>
              </CommentItem>
              <CommentItem>
                <AuthorAvatar>
                <img src={avatarUrl} alt=""/>
                </AuthorAvatar>
                <AuthorInfo>
                  <span className='name'><a href="/">逆转王牌</a></span>
                  <p className='meta'>10楼 · 2018.10.13 15:08</p>
                </AuthorInfo>
                <CommentContent>以前在大学机房里最普遍的病毒就是把U盘所有文件放到一个.命名的隐藏文件夹里，简单的显示隐藏文件就好了，很多人不知道就选择格式化U盘，所有的资料都只能重新再弄……</CommentContent>
                <CommentTool>
                  <span className='zan'>
                    <i className='iconfont'>&#xe62b;</i>
                    <span>赞</span>
                  </span>
                  <span className='answer'>
                    <i className='iconfont'>&#xe602;</i>
                    <span>回复</span>
                  </span>
                </CommentTool>
              </CommentItem>
              <CommentItem>
                <AuthorAvatar>
                <img src={avatarUrl} alt=""/>
                </AuthorAvatar>
                <AuthorInfo>
                  <span className='name'><a href="/">逆转王牌</a></span>
                  <p className='meta'>10楼 · 2018.10.13 15:08</p>
                </AuthorInfo>
                <CommentContent>以前在大学机房里最普遍的病毒就是把U盘所有文件放到一个.命名的隐藏文件夹里，简单的显示隐藏文件就好了，很多人不知道就选择格式化U盘，所有的资料都只能重新再弄……</CommentContent>
                <CommentTool>
                  <span className='zan'>
                    <i className='iconfont'>&#xe62b;</i>
                    <span>赞</span>
                  </span>
                  <span className='answer'>
                    <i className='iconfont'>&#xe602;</i>
                    <span>回复</span>
                  </span>
                </CommentTool>
              </CommentItem>
              <CommentItem>
                <AuthorAvatar>
                <img src={avatarUrl} alt=""/>
                </AuthorAvatar>
                <AuthorInfo>
                  <span className='name'><a href="/">逆转王牌</a></span>
                  <p className='meta'>10楼 · 2018.10.13 15:08</p>
                </AuthorInfo>
                <CommentContent>以前在大学机房里最普遍的病毒就是把U盘所有文件放到一个.命名的隐藏文件夹里，简单的显示隐藏文件就好了，很多人不知道就选择格式化U盘，所有的资料都只能重新再弄……</CommentContent>
                <CommentTool>
                  <span className='zan'>
                    <i className='iconfont'>&#xe62b;</i>
                    <span>赞</span>
                  </span>
                  <span className='answer'>
                    <i className='iconfont'>&#xe602;</i>
                    <span>回复</span>
                  </span>
                </CommentTool>
              </CommentItem>
            </CommentList>
          </CommentWrapper>
        </DetailWrapper>
      </Fragment>
    )
  }
  componentDidMount() {
    let id = this.props.match.params.id;
    this.props.handleDetail(id);
  }
}

const mapStateToProps = (state) => ({
  title: state.getIn(['detail', 'title']),
  name: state.getIn(['detail', 'name']),
  avatarUrl: state.getIn(['detail', 'avatarUrl']),
  meta: state.getIn(['detail', 'meta']),
  motto: state.getIn(['detail', 'motto']),
  content: state.getIn(['detail', 'content'])
});

const mapDispatchToProps = (dispatch)=> ({
  handleDetail(id) {
    dispatch(actionCreators.getDetail(id));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Detail));