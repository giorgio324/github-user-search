import React, { useContext } from 'react';
import Navbar from '../Components/Navbar';
import Search from '../Components/Search';
import InfoCards from '../Components/InfoCards';
import User from '../Components/User';
import { GithubContext } from '../Context/context';
import styled from 'styled-components';
import loadingImg from '../Assets/Images/loading.gif';
const Dashboard = () => {
  const { loading } = useContext(GithubContext);
  if (loading) {
    return (
      <Wrapper>
        <Navbar />
        <div className='loading-container'>
          <img src={loadingImg} alt='loading' className='loading-img' />
        </div>
      </Wrapper>
    );
  }
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
  min-height: 100vh;
  transition: ${({ theme }) => theme.transition};
  .loading-container {
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: calc(100vh - 200px);
  }
`;
