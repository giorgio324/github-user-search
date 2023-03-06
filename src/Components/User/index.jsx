import React, { useContext } from 'react';
import { GithubContext } from '../../Context/context';
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
