import styled from 'styled-components';

export const DetailWrapper = styled.div`
  width: 625px;
  margin: 56px auto 0;
  color: #2f2f2f;
  overflow: hidden;
  padding-bottom: 50px;
`;

export const Header = styled.p`
  margin: 50px 0 20px 0;
  font-size: 34px;
  line-height: 44px;
  font-weight: bold;
`;

export const Author = styled.div`
  margin: 30px 0 40px;
`;

export const AuthorAvatar = styled.a`
  width: 48px;
  height: 48px;
  cursor: pointer;
  vertical-align: middle;
  display: inline-block;
  box-sizing: border-box;
  img {
    width:100%;
    height: 100%;
    border: 1px solid #ddd;
    border-radius: 50%;
  }
`;

export const AuthorInfo = styled.div`
  vertical-align: middle;
  display: inline-block;
  box-sizing: border-box;
  margin-left: 15px;
  a {
    color: #333;
    text-decoration: none;
  }
  .name {
    margin-right: 10px;
    font-size: 16px;
    vertical-align: middle;
  }
  .follow {
    border-radius: 40px;
    color: #fff;
    padding: 0 9px 0 5px;
    font-size: 12px;
    background: #42c02e;
    border-color: #42c02e;
    display: inline-block;
    cursor: pointer;
    vertical-align: middle;
    user-select: none;
    line-height: normal;
    background-image: none;
    text-align: center;
    border: 1px solid transparent;
    .iconfont {
      font-size: 12px;
    }
    span {
      margin-left: 2px;
      display: inline;
    }
  }
  .meta {
    margin-top: 10px;
    font-size: 12px;
    color: #969696;
  }
`;

export const Content = styled.div`
  color: #2f2f2f;
  img {
    width: 100%;
    margin-bottom: 30px;
  }
  p {
    font-size: 16px;
    margin: 20px 0;
    text-indent: 2em;
    line-height: 30px;
  }
`;

export const Reward = styled.div`
  width: 625px;
  margin: 50px auto;
  overflow: hidden;
  text-align: center;
  p {
    font-size: 17px;
    font-weight: bold;
    color: #969696;
    line-height: 24px;
  }
  .btn-pay {
    margin-top: 20px;
    display: inline-block;
    padding: 8px 25px;
    font-size: 16px;
    color: #fff;
    user-select: none;
    background-color: #ea6f5a;
    border-radius: 20px;
  }
`;

export const FloatWrapper = styled.div`
  position: fixed;
  top: 100px;
  right: 180px;
  width: 180px;
  height: 260px;
  display: ${props => props.display};
  background-image: url('https://cdn2.jianshu.io/assets/web/web-note-ad-side-banner-22096669b4c4b91c3b9266894e951aef.png');
  background-repeat: no-repeat;
  background-size: contain;
  .close {
    display: block;
    width: 20px;
    height: 20px;
    line-height: 20px;
    color: #999;
    position: absolute;
    right: 10px;
    top: 10px;
    font-size: 18px;
    cursor: pointer;
    text-align: center;
  }
`;

export const AuthorDetail = styled.div`
  width: 625px;
  margin: 100px auto 50px;
  overflow: hidden;
  font-size: 12px;
  padding: 20px;
  position: relative;
  box-sizing: border-box;
  background-color: hsla(0,0%,71%,.1);
  border: 1px solid #e1e1e1;
  border-radius: 4px;
  color: #969696;
  .big-follow {
    position: absolute;
    top: 24px;
    right: 30px;
    width: 100px;
    padding: 8px 4px;
    font-size: 16px;
    box-sizing: border-box;
    .iconfont {
      font-size: 16px;
    }
  }
`;

export const AuthorDesc = styled.p`
  margin-top: 20px;
  padding-top: 20px;
  border-top: 1px solid #e1e1e1;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

export const DownloadApp = styled.a`
    display: block;
    width: 625px;
    height: 140px;
    margin-bottom: 50px;
    border-radius: 4px;
    background: url('https://cdn2.jianshu.io/assets/web/web-note-ad-1-c2e1746859dbf03abe49248893c9bea4.png');
    background-size: contain;
`;

export const CommentWrapper = styled.div`
  width: 625px;
  margin: 0 auto;
  overflow: hidden;
`;

export const CommentTitle = styled.div`
  padding-top: 5px;
  padding-bottom: 20px;
  font-size: 17px;
  font-weight: 700;
  vertical-align: middle;
  border-bottom: 1px solid #f0f0f0;
  .author-only {
    margin-left: 10px;
    padding: 4px 8px;
    font-size: 12px;
    color: #969696;
    vertical-align: middle;
    border: 1px solid #e1e1e1;
    border-radius: 12px;
  }
  span {
    vertical-align: middle;
  }
  .pull-right {
    float: right;
  }
  .time {
    margin-left: 10px;
    font-size: 12px;
    font-weight: bold;
    color: #969696;
    vertical-align: middle;
  }
  .active {
    color: #2f2f2f;
  }
`;

export const CommentList = styled.div`
  width: 100%;
  overflow: hidden;
`;

export const CommentItem = styled.div`
  padding: 20px 0;
  border-bottom: 1px solid #f0f0f0;
`;

export const CommentContent = styled.p`
  margin: 15px 0;
  font-size: 16px;
  line-height: 24px;
  word-break: break-word!important;
`;

export const CommentTool = styled.p`
  color: #969696;
  .zan {
    display: inline-block;
    vertical-align: middle;
    margin-right: 15px;
    .iconfont {
      font-size: 20px;
      margin-right: 2px;
      vertical-align: middle;
    }
    span {
      font-size: 16px;
      cursor: pointer;
      vertical-align: middle;
    }
  }
  .answer {
    display: inline-block;
    vertical-align: middle;
    margin-right: 15px;
    .iconfont {
      font-size: 18px;
      margin-right: 4px;
      vertical-align: middle;
    }
    span {
      font-size: 16px;
      cursor: pointer;
      vertical-align: middle;
    }
  }
`;

export const ArticleWrapper = styled.div`
  width: 100%;
  background-color: #f5f5f5;
`;

export const ArticleList = styled.div`
  width: 625px;
  margin: 0 auto;
  overflow: hidden;
`;