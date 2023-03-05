import React from 'react';
import styled from 'styled-components';
import errorImg from '../Assets/Images/404.svg';
import { Link } from 'react-router-dom';
const Error = () => {
  return (
    <Wrapper>
      <img src={errorImg} alt='' />
      <h2>Sorry, This page was not found</h2>
      <Link to={'/'}>Go Back</Link>
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

  h2 {
    font-size: 40px;
    margin-top: 2rem;
  }
  a {
    font-size: 40px;
    background-color: #27ae60;
    border-radius: 8px;
    border-style: none;
    box-shadow: rgba(39, 174, 96, 0.15) 0 4px 9px;
    color: #fff;
    cursor: pointer;
    display: inline-block;
    font-size: 20px;
    font-weight: 600;
    letter-spacing: normal;
    line-height: 1.5;
    outline: none;
    overflow: hidden;
    padding: 10px 30px;
    text-align: center;
    text-decoration: none;
    transition: all 0.3s;
    margin-top: 2rem;
  }
  a:hover {
    box-shadow: rgba(39, 174, 96, 0.2) 0 6px 12px;
    background-color: #1e8449;
    opacity: 1;
    transform: translateY(0);
    transition-duration: 0.35s;
  }
  a:active {
    transform: translateY(2px);
    transition-duration: 0.35s;
  }
`;
export default Error;
