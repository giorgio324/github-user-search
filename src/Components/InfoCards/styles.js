import styled from 'styled-components';

export const StyledInfoCards = styled.section`
  width: 90vw;
  max-width: 1180px;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  align-items: center;
  margin: 0 auto;
  padding: 2rem 0;

  @media screen and (max-width: 925px) {
    justify-content: center;
    & > * {
      margin-bottom: 2rem;
    }
  }
`;
