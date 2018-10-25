import styled from 'styled-components';
import navLogo from '../../statics/nav-logo.png';


export const HeaderTotal = styled.div`
  width: 100%;
  position: fixed;
  top: 0;
  left: 0; 
  z-index: 2;
  background: #fff;
`;

export const HeaderWrapper = styled.div`
  height: 56px;
  position: relative;
  border-bottom: 1px solid #f0f0f0;
`;

export const Logo = styled.div`
  width: 100px;
  height: 56px;
  position: absolute;
  top: 0;
  left: 0;
  background: url(${navLogo});
  background-size: contain;
`;

export const Nav = styled.div`
  width: 960px;
  padding-right: 70px;
  box-sizing: border-box;
  height: 100%;
  margin: 0 auto;
`;
export const NavItem = styled.div`
  line-height:56px;
  font-size: 17px;
  padding: 0 15px;
  cursor: pointer;
  &.left {
    float: left;
  }
  &.right {
    float: right;
    color: #969696;
  }
  &.active {
    color:#ea6f5a;
  }
`;

export const SeachWrapper = styled.div`
  float: left;
  position: relative;
  .zoom {
    position:absolute;
    right: 5px;
    bottom: 4px;
    width: 30px;
    line-height: 30px;
    text-align: center;
    border-radius: 15px;
    &.focused {
      color: #fff;
      background: #777;
    }
  }
`;

export const NavSearch = styled.input.attrs({
  placeholder: '搜索'
})`
  width:240px;
  height: 38px;
  border:none;
  outline: none;
  color: #666;
  font-size: 14px;
  margin-top: 9px;
  margin-left: 20px;
  padding: 0 40px 0 20px;
  border-radius: 19px;
  box-sizing: border-box;
  background-color: #eee;
  &::placeholder {
    color: #999;
  }
  &.focused {
    width: 320px;
  }
  &.slide-enter {
    transition: all 0.2s ease-out;
  }
  &.slide-enter-active {
    width: 320px;
  }
  &.slide-exit {
    transition: all 0.2s ease-out;
  }
  &.slide-exit-active {
    width: 240px;
  }
`;

export const SearchInfo = styled.div`
  position:absolute;
  top: 100%;
  left: 20px;
  width: 310px;
  margin-top: 9px;
  padding: 0 20px;
  border-radius: 4px;
  box-sizing: border-box;
  background-color: #fff;
  box-shadow: 0 0 8px rgba(0,0,0,.2);
  ::after {
    content: "";
    position: absolute;
    width: 0;
    height: 0;
    border: 12px solid transparent;
    border-bottom-color: #fff;
    left: 20px;
    bottom: 99%;
  }
`;

export const SearchInfoTitle = styled.div`
  margin-top: 20px;
  margin-bottom: 10px;
  font-size: 14px;
  color: #969696;
  line-height: 20px;
`;

export const SearchInfoSwitch = styled.span`
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

export const SearchInfoList = styled.div`
  overflow: hidden;
  box-sizing: border-box;
`;

export const SearchInfoItem = styled.a`
  padding: 2px 6px;
  font-size: 12px;
  box-sizing: border-box;
  display: inline-block;
  margin-right: 10px;
  margin-bottom: 10px;
  line-height: 20px;
  color: #787878;
  cursor: pointer;
  border: 1px solid #ddd;
  border-radius: 3px;
`;

export const Addition = styled.div`
  position:absolute;
  top: 0;
  right: 0;
`;
export const Button = styled.div`
  float: right;
  line-height: 38px;
  margin-top: 9px;
  margin-right: 20px;
  padding: 0 20px;
  border-radius: 19px;
  font-size: 15px;
  cursor: pointer;
  border: 1px solid rgba(236,97,73,.7);
  &.reg {
    color: #ea6f5a;
  }
  &.write {
    color: #fff;
    background-color: #ea6f5a;
  }
`;
