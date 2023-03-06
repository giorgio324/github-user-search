import React, { useContext } from 'react';
import Navbar from '../Components/Navbar';
import Search from '../Components/Search';
import InfoCards from '../Components/InfoCards';
import User from '../Components/User';
import { GithubContext } from '../Context/context';
import styled from 'styled-components';
const Dashboard = () => {
  const { setChangeToDarkTheme, changeToDarkTheme } = useContext(GithubContext);
  return (
    <Wrapper>
      <Navbar />
      <Search />
      <InfoCards />
      <User />
    </Wrapper>
  );
};

export default Dashboard;

const Wrapper = styled.main`
  background-color: ${({ theme }) => theme.backgroundColors.body};
`;
