import styled from 'styled-components';

export const StyledUserFollowers = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-height: 300px;
  overflow-y: scroll;
  padding: 1rem;
  background-color: ${({ theme }) => theme.backgroundColors.card};
  border: 1px solid #ddd;
  border-radius: 8px;
  margin: 1rem;
  &::-webkit-scrollbar {
    width: 8px;
  }

  &::-webkit-scrollbar-track {
    background: #f1f1f1;
    border-radius: 4px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: #888;
    border-radius: 4px;
  }

  & > * {
    margin-bottom: 0.5rem;
  }

  article {
    width: 100%;
    display: flex;
    justify-content: flex-start;
    align-items: center;
  }
  article img {
    width: 45px;
    height: 45px;
    border-radius: 50%;
  }
  article div {
    margin-left: 1rem;
  }
  article div h4 {
    margin: 0.25rem 0;
    text-transform: capitalize;
    font-weight: bold;
  }
  article div a {
    margin: 0.25rem 0;
    color: #888;
  }
`;
