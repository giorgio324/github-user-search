import React, { useContext } from 'react';
import { GithubContext } from '../../Context/context';
import { GoRepo, GoGist } from 'react-icons/go';
import { FiUsers, FiUserPlus } from 'react-icons/fi';
import InfoCard from './InfoCard';
import { StyledInfoCards } from './styles';
const InfoCards = () => {
  const { repos, githubUser } = useContext(GithubContext);
  const { public_repos, followers, following, public_gists } = githubUser;
  const cardItems = [
    {
      id: 1,
      icon: <GoRepo className='icon' />,
      label: 'repos',
      value: public_repos,
      color: '#CF4DCE',
      bgColor: '#ecb8eb',
    },
    {
      id: 2,
      icon: <FiUsers className='icon' />,
      label: 'followers',
      value: followers,
      color: '#53B8BB',
      bgColor: '#a9dcdd',
    },
    {
      id: 3,
      icon: <FiUserPlus className='icon' />,
      label: 'following',
      value: following,
      color: '#4E31AA',
      bgColor: '#a798d5',
    },
    {
      id: 4,
      icon: <GoGist className='icon' />,
      label: 'gists',
      value: public_gists,
      color: '#E7B10A',
      bgColor: '#f5e09d',
    },
  ];
  return (
    <StyledInfoCards>
      {cardItems.map((item, index) => {
        return (
          <InfoCard
            key={index}
            color={item.color}
            icon={item.icon}
            label={item.label}
            value={item.value}
            bgColor={item.bgColor}
          />
        );
      })}
    </StyledInfoCards>
  );
};

export default InfoCards;
