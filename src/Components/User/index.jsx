import React from 'react';
import UserCard from './UserCard';
import UserFollowers from './UserFollowers';
import { StyledUser } from './styles';
const User = () => {
  return (
    <StyledUser>
      <UserCard />
      <UserFollowers />
    </StyledUser>
  );
};

export default User;
