import React, { useContext } from 'react';
import { GithubContext } from '../../../Context/context';
import { StyledUserFollowers } from './styles';

const UserFollowers = () => {
  const { followers } = useContext(GithubContext);
  return (
    <StyledUserFollowers>
      {followers.map((follower, index) => {
        const { avatar_url: image, html_url, login } = follower;
        return (
          <article key={index}>
            <img src={image} alt={login} />
          </article>
        );
      })}
    </StyledUserFollowers>
  );
};

export default UserFollowers;
