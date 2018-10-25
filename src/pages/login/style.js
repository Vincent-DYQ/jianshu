import styled from 'styled-components';

export const LoginWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  padding-top: 80px;
  background: #f1f1f1;
`;

export const LoginContainer = styled.div`
  width: 400px;
  margin: 100px auto 0;
  text-align: center;
  padding: 50px 50px;
  border-radius: 4px;
  box-shadow: 0 0 8px rgba(0,0,0,.1);
  vertical-align: middle;
  background: #fff;
`;

export const Input = styled.input`
  display: block;
  width: 300px;
  height: 40px;
  line-height: 40px;
  margin: 15px auto;
  padding: 0 20px;
  font-size: 16px;
  border-radius: 5px;
  outline: none;
  box-sizing: border-box;
  border: 1px solid #c8c8c8;
`;

export const Button = styled.div`
  width: 300px;
  height: 40px;
  line-height: 40px;
  border-radius: 20px;
  background: #3194d0;
  margin-top: 30px;
  font-size: 18px;
  color: #fff;
  text-align: center;
`;

