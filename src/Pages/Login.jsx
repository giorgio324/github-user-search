import React from 'react';
import styled from 'styled-components';
import loginImg from '../Assets/Images/login.svg';
import { LoginLinkBtn } from '../Components/GlobalStyles/LinkButton';
const Login = () => {
  return (
    <Wrapper>
      <div>
        <img src={loginImg} alt='' />
        <h1>Github User Search</h1>
      </div>
      <LoginLinkBtn to={'/'}>Login</LoginLinkBtn>
    </Wrapper>
  );
};
const Wrapper = styled.section`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.backgroundColors.body};
  font-family: ${({ theme }) => theme.fonts.primary};
  transition: ${({ theme }) => theme.transition};
  div {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  img {
    width: 50%;
    margin: 0 auto;
  }
  h1 {
    text-align: center;
    margin: 2rem 0;
    font-size: 35px;
    color: ${({ theme }) => theme.fontColors.primary};
  }
`;
export default Login;
