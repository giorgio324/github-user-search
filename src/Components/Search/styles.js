import styled from 'styled-components';

export const StyledSearch = styled.section`
  width: 90vw;
  max-width: 1180px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 10fr 2fr;
  form div {
    margin: 0 1rem;
    margin-right: 2rem;
    background-color: ${({ theme }) => theme.backgroundColors.card};
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-radius: 6px;
    input {
      width: 100%;
      padding: 1rem;
      border: none;
      outline: none;
      background: transparent;
      font-size: 18px;
      font-weight: 500;
    }
    input::placeholder {
      text-transform: capitalize;
    }
  }

  button {
    margin: 0 1rem;
    margin-left: auto;
    background-color: #39b5e0;
    border: 2px solid #39b5e0;
    border-radius: 6px;
    box-sizing: border-box;
    color: #3b3b3b;
    cursor: pointer;
    display: inline-block;
    font-weight: 600;

    outline: none;
    padding: 6px 10px;
    text-align: center;

    transition: all 300ms cubic-bezier(0.23, 1, 0.32, 1);
  }
  button:hover {
    color: #fff;
    background-color: #39b5e0;
    box-shadow: rgba(0, 0, 0, 0.25) 0 8px 15px;
    transform: scale(1.02);
  }
  button:active {
    box-shadow: none;
    transform: translateY(0);
  }
  h3 {
    color: ${({ theme }) => theme.fontColors.primary};
    text-align: center;
  }
  @media screen and (max-width: 544px) {
    display: block;
    h3 {
      margin: 0 1rem;
      margin-top: 1rem;
      text-align: start;
    }
  }
`;

export const StyledError = styled.div`
  width: 90vw;
  max-width: 1180px;
  margin: 0 auto;
  p {
    margin: 1rem;
    color: ${({ theme }) => theme.fontColors.error};
  }
  @media screen and (max-width: 544px) {
    p {
      text-align: center;
    }
  }
`;
