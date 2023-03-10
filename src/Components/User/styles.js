import styled from 'styled-components';

export const StyledUser = styled.section`
  width: 90vw;
  max-width: 1180px;
  margin: 0 auto;
  display: grid;
  padding: 2rem 0;
  grid-template-columns: 1fr;
  transition: ${({ theme }) => theme.transition};

  @media screen and (min-width: 768px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
`;
