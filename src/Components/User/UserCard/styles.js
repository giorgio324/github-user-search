import styled from 'styled-components';

export const StyledUserCard = styled.section`
  margin: 1rem;
  padding: 1rem;
  background-color: ${({ theme }) => theme.backgroundColors.card};
  border-radius: 8px;
  min-height: 300px;

  header img {
    width: 70px;
    height: 70px;
    border-radius: 50%;
    border: 2px solid black;
  }
  header {
    display: flex;
    align-items: center;
  }

  header div {
    margin-left: 10px;
  }

  header a {
    margin-left: auto;
    background-color: transparent;
    border: 2px solid #39b5e0;
    border-radius: 15px;
    box-sizing: border-box;
    color: #3b3b3b;
    cursor: pointer;
    display: inline-block;
    font-size: 16px;
    font-weight: 600;
    line-height: normal;
    min-height: 20px;
    min-width: 0;
    outline: none;
    padding: 4px 10px;
    text-align: center;
    text-decoration: none;
    transition: all 300ms cubic-bezier(0.23, 1, 0.32, 1);
  }
  header a:hover {
    color: #fff;
    background-color: #39b5e0;
    box-shadow: rgba(0, 0, 0, 0.25) 0 8px 15px;
    transform: translateY(-2px);
  }
  header a:active {
    box-shadow: none;
    transform: translateY(0);
  }
  p {
  }
  div {
    max-width: 85%;

    word-break: normal;
  }
  div p {
    width: 100%;
    margin: 0.75rem 0;
  }
  div p svg {
    margin: 0 5px;
  }
  @media screen and (max-width: 544px) {
    header {
      display: flex;
      flex-direction: column;
      align-items: center;
    }
    header a {
      margin: 0.5rem 0;
    }
    header div {
      margin: 0.5rem 0;
    }
  }
`;
