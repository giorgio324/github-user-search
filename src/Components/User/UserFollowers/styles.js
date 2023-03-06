import styled from 'styled-components';

export const StyledUserFollowers = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-height: 300px;
  overflow-y: scroll;
  padding: 1rem;
  background-color: #fff;
  border: 1px solid #ddd;
  border-radius: 4px;

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
`;
