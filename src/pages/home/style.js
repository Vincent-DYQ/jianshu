import styled from 'styled-components';

export const HomeWrapper = styled.div`
  width: 960px;
  margin: 56px auto 0;
  overflow: hidden;
`;

export const HomeLeft = styled.div`
  float: left;  
  width: 625px;
  margin-left: 15px;
  padding-top: 30px;
  .home-banner {
    width: 625px;
    height: 270px;
    border-radius: 6px;
  }
`;

export const HomeRight = styled.div`  
  float: right;
  width: 280px;
`;

export const TopicWrapper = styled.div`
  overflow: hidden;
  padding: 20px 0 10px 0;
  margin-left: -18px;
  border-bottom: 1px solid #f0f0f0;
  .more {
    text-decoration: none;
    line-height: 34px;
    font-size: 14px;
    height: 34px;
    color: #787878;
    float: left;
    margin-left: 20px;
  }
`;

export const TopicItem = styled.div`
  float: left;
  height: 32px;
  color: #000;
  font-size: 14px;
  overflow: hidden;
  line-height: 32px;
  border-radius: 4px;
  background: #f7f7f7;
  padding-right: 10px;
  margin-left: 18px;
  margin-bottom: 18px;
  border: 1px solid #dcdcdc;
  .topic-img {
    width: 32px;
    height: 32px;
    float: left;
    margin-right: 10px;
  }
`;

export const ListItem = styled.div`
  overflow: hidden;
  padding: 20px 0;
  border-bottom: 1px solid #f0f0f0;
  .list-pic {
    float: right;
    display: block;
    width: 125px;
    height: 100px;
    border-radius: 4px;
    box-sizing: border-box;
    border: 1px solid #f0f0f0;
  }
`;

export const ListItemInfo = styled.div`
  width: 500px;
  float: left;
  box-sizing: border-box;
  .title {
    font-size: 18px;
    font-weight: bold;
    line-height: 27px;
    color: #333;
  }
  .desc {
    margin: 0 0 8px;
    font-size: 13px;
    line-height: 24px;
    color: #999;
  }
`;

export const LoadMore = styled.div`
  width: 100%;
  height: 40px;
  line-height: 40px;
  text-align: center;
  color: #fff;
  margin: 30px 0;
  border-radius: 20px;
  background-color: #a5a5a5;
`;

export const RecommendWrapper = styled.div`
  margin: 30px 0;
`;

export const RecommendItem = styled.a.attrs({
  href: props => props.url
})`
  width: 280px;
  height: 50px;
  display: block;
  margin-bottom: 6px;
  border-radius: 4px;
  background: url(${props=>props.imgUrl});
  background-size: contain;
`; 

export const DownloadWrapper = styled.div`
  width: 100%;
  padding: 10px 22px;
  margin-bottom: 30px;
  border-radius: 6px;
  box-sizing: border-box;
  border: 1px solid #f0f0f0;
  background-color: #fff;
  .qrcode {
    width: 60px;
    height:60px;
    opacity: 0.85;
    vertical-align: middle;
  }
  .info {
    display: inline-block;
    vertical-align: middle;
    margin-left: 15px;
  }
  .title {
    font-size: 15px;
    color: #333;
  }
  .description {
    margin-top: 10px;
    font-size: 13px;
    color: #999;
  }
`;

export const WriterWrapper = styled.div`
  margin: 0 0 20px;
  overflow: hidden;
  box-sizing: border-box;
  .find_more {
    width: 100%;
    display: block;
    font-size: 14px;
    color: #787878;
    text-align: center;
    border-radius: 4px;
    margin-top: 30px;
    box-sizing: border-box;
    padding: 7px 7px 7px 12px;
    text-decoration: none;
    background-color: #f7f7f7;
    border: 1px solid #dcdcdc;
  }
`;

export const WriterTitle = styled.div`
  margin-top: 20px;
  margin-bottom: 10px;
  font-size: 14px;
  color: #969696;
  line-height: 20px;
`;

export const WriterSwitch = styled.span`
  float: right;
  cursor: pointer;
  font-size: 13px;
  .spin {
    font-size: 12px;
    display: block;
    float: left;
    margin-right: 2px;
    margin-top: 1px;
    transition: all 0.4s ease-in;
    transform: rotate(0deg);
    transform-origin: center center;
  }
`;

export const WriterList = styled.ul`
  margin: 0 0 20px;
  text-align: left;
  list-style: none;
  overflow: hidden;
`;

export const WriterItem = styled.li`
  margin-top: 30px;
  .avatar {
    float: left;
    width: 48px;
    height: 48px;
    margin-right: 10px;
  }
  .avater-pic {
    width: 100%;
    height: 100%;
    border-radius: 50%;
  }
  .follow {
    float: right;
    padding: 0;
    margin-top: 6px;
    font-size: 14px;
    color: #42c02e;
    text-decoration: none;
  }
  .name {
    color: #333;
    font-size: 16px;
    margin-top: 5px;
    display: block;
    padding-top: 6px;
    text-decoration: none;
  }
  .like {
    margin-top: 10px;
    font-size: 12px;
    color: #969696;
  }
`;

export const BackWrapper = styled.p`
    cursor: pointer;
    width: 50px;
    height: 50px;
    color: #aaa;
    line-height: 50px;
    text-align: center;
    display: block;
    position: fixed;
    right: 100px;
    bottom: 100px;
    font-size: 14px;
    border-radius: 4px;
    box-sizing: border-box;
    border: 1px solid #dcdcdc;
    background-color: #fff;
`;



