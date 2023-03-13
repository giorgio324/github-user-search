import styled from 'styled-components';

export const NavWrapper = styled.section`
  width: 100vw;
  padding: 1.5rem 0;
  margin-bottom: 2rem;
  background-color: ${({ theme }) => theme.backgroundColors.card};
  position: relative;
  transition: ${({ theme }) => theme.transition};
`;

export const StyledNav = styled.nav`
  max-width: 680px;
  margin: 0 auto;
  display: flex;
  column-gap: 1rem;
  justify-content: space-between;
  align-items: center;
  .username {
    font-weight: bold;
  }
  img {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    border: solid 1px black;
  }
  div {
    display: flex;
    column-gap: 1rem;
    justify-content: center;
    align-items: center;
  }
  div div {
    display: flex;
    align-items: center;
    justify-content: center;
    column-gap: 1rem;
    text-align: center;
  }

  div h4 {
    margin: 0; /* remove default margin */
  }

  .logout {
    background-color: rgb(57, 181, 224);
    border: 2px solid rgb(57, 181, 224);
    border-radius: 6px;
    color: rgb(59, 59, 59);
    cursor: pointer;
    font-weight: 600;
    outline: none;
    padding: 4px 7px;
    text-align: center;
    transition: all 300ms cubic-bezier(0.23, 1, 0.32, 1) 0s;
  }
  @media screen and (max-width: 799px) {
    max-width: 400px;
  }
  @media screen and (max-width: 500px) {
    justify-content: space-evenly;
    div {
    }
    div div {
      flex-direction: column;
      align-items: flex-start;
    }
    div div h4 {
      padding: 8px 0;
    }
  }
`;

export const StyledThemeButton = styled.button`
  font-size: 24px;
  background: transparent;
  border: none;
  color: ${({ theme }) => theme.fontColors.themeIcon};
  cursor: pointer;
`;
