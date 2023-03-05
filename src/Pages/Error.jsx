import React, { useContext } from 'react';
import styled from 'styled-components';
import errorImg from '../Assets/Images/404.svg';
import { StyledLink } from '../Components/GlobalStyles/LinkButton';
import { GithubContext } from '../Context/context';
const Error = () => {
  const { setChangeToDarkTheme, changeToDarkTheme } = useContext(GithubContext);
  return (
    <Wrapper>
      <img src={errorImg} alt='' />
      <h2>Sorry, This page was not found</h2>
      <StyledLink to={'/'}>Go Back</StyledLink>
      <button onClick={() => setChangeToDarkTheme(!changeToDarkTheme)}>
        dark mode
      </button>
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
  background-color: ${({ theme }) => theme.backgroundColors.primary};
  transition: ${({ theme }) => theme.transition};
  h2 {
    font-size: 40px;
    margin-top: 2rem;
    color: ${({ theme }) => theme.fontColors.primary};
  }
`;
export default Error;
