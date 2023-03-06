import styled from 'styled-components';
export const StyledCard = styled.article`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  column-gap: 2rem;
  width: 265px;
  padding: 1.5rem 0;
  border-radius: 8px;
  transition: all 0.3s linear;
  background-color: ${({ theme }) => theme.backgroundColors.card};
  margin: 1rem;
  span {
    color: ${(props) => props.color || 'black'};
    padding: 0.5rem;
    width: 45px;
    height: 45px;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${(props) => props.bgColor};
  }
  span svg {
    width: auto;
    height: 85%;
  }
  div {
    width: 75px;
    text-align: center;
  }
  div h3 {
  }
  div p {
  }
`;
