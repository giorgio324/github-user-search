import React, { useContext } from 'react';
import Navbar from '../Components/Navbar';
import Search from '../Components/Search';
import UserCard from '../Components/UserCard';
import { GithubContext } from '../Context/context';

const Dashboard = () => {
  const { setChangeToDarkTheme, changeToDarkTheme } = useContext(GithubContext);
  return (
    <main>
      <Navbar />
      <Search />
      <UserCard />
    </main>
  );
};

export default Dashboard;
