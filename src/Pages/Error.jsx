import React from 'react';
import styled from 'styled-components';
import errorImg from '../Assets/Images/404.svg';
import { StyledLink } from '../Components/GlobalStyles/LinkButton';
const Error = () => {
  return (
    <Wrapper>
      <img src={errorImg} alt='' />
      <h2>Sorry, This page was not found</h2>
      <StyledLink to={'/'}>Go Back</StyledLink>
    </Wrapper>
  );
};
const Wrapper = styled.section`
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  font-family: ${({ theme }) => theme.fonts.primary};
  background-color: ${({ theme }) => theme.backgroundColors.body};
  transition: ${({ theme }) => theme.transition};
  h2 {
    font-size: 40px;
    margin-top: 2rem;
    color: ${({ theme }) => theme.fontColors.primary};
  }
`;
export default Error;
