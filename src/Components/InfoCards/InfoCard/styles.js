import styled from 'styled-components';
export const StyledCard = styled.article`
  border-radius: 8px;
  padding: 1rem 2rem;
  display: grid;
  grid-template-columns: auto 1fr;
  column-gap: 2.5rem;
  align-items: center;
  background-color: ${({ theme }) => theme.backgroundColors.card};
  margin: 1rem;
  width: 90%;
  span {
    color: ${(props) => props.color || 'black'};
    width: 3rem;
    height: 3rem;
    display: grid;
    place-items: center;
    border-radius: 50%;
    background-color: ${(props) => props.bgColor};
  }
  span svg {
    font-size: 1.5rem;
  }
  div {
    width: 75px;
    text-align: center;
  }
  div h3 {
    margin-bottom: 0;
    letter-spacing: 0;
  }
  div p {
    margin-bottom: 0;
    text-transform: capitalize;
  }
  @media (min-width: 546px) {
  }
`;
