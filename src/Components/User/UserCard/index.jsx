import React, { useContext } from 'react';
import { GithubContext } from '../../../Context/context';
import { MdBusiness, MdLocationOn, MdLink } from 'react-icons/md';
import { StyledUserCard } from './styles';
const UserCard = () => {
  const { githubUser } = useContext(GithubContext);
  const {
    avatar_url: image,
    html_url,
    company,
    name,
    blog,
    bio,
    location,
    twitter_username,
  } = githubUser;
  return (
    <StyledUserCard>
      <header>
        <img src={image} alt={name} />
        <div>
          <h4>{name}</h4>
          <p className='twitter'>
            {twitter_username ? `@ ${twitter_username}` : ''}
          </p>
        </div>
        <a href={html_url}>Follow</a>
      </header>
      <p>{bio}</p>
      <div>
        {company ? (
          <p>
            <MdBusiness></MdBusiness>
            {company}
          </p>
        ) : (
          <p>
            <MdBusiness></MdBusiness>
            Company Unknown
          </p>
        )}
        {location ? (
          <p>
            <MdLocationOn></MdLocationOn>
            {location}
          </p>
        ) : (
          <p>
            <MdLocationOn></MdLocationOn>
            Location Unknown
          </p>
        )}
        {blog ? (
          <a href={`https://${blog}`}>
            <MdLink></MdLink>
            {blog}
          </a>
        ) : (
          <p>
            <MdLink></MdLink>
            Blog Unknown
          </p>
        )}
      </div>
    </StyledUserCard>
  );
};

export default UserCard;
