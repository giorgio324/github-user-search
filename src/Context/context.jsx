import { createContext, useEffect, useState } from 'react';
import { userData } from '../Data/staticDataUser';
import { userFollowers } from '../Data/staticDataFollowers';
import { userRepos } from '../Data/staticDataRepos';
import axios from 'axios';
export const GithubContext = createContext();

export const GithubProvider = ({ children }) => {
  const [changeToDarkTheme, setChangeToDarkTheme] = useState(getTheme());
  // when theme changes save it in local storage
  useEffect(() => {
    localStorage.setItem('dark', JSON.stringify(changeToDarkTheme));
  }, [changeToDarkTheme]);
  // if theme is not changed return false and if it is saved return that theme
  function getTheme() {
    const savedTheme = JSON.parse(localStorage.getItem('dark'));
    return savedTheme || false;
  }
  const [githubUser, setGithubUser] = useState(userData);
  const [followers, setFollowers] = useState(userFollowers);
  const [repos, setRepos] = useState(userRepos);
  const [remainingRequest, setRemeiningRequest] = useState(0);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState({ show: false, msg: '' });
  const checkRemainingRequests = async () => {
    try {
      const response = axios(`https://api.github.com/rate_limit`);
      const rate = (await response).data.rate.remaining;
      setRemeiningRequest(rate);
      if (rate === 0) {
        toggleError(true, 'request limit reached check again in 1 hour');
      }
    } catch (error) {}
  };
  const searchGithubUser = async (user) => {
    setLoading(true);
    try {
      const response = await axios(`https://api.github.com/users/${user}`);
      setGithubUser(response.data);
      const { login, followers_url } = response.data;
      // finds repos
      axios(`https://api.github.com/users/${login}/repos?per_page=100`).then(
        (response) => setRepos(response.data)
      );
      // finds repos followers
      axios(`${followers_url}?per_page=100`).then((response) =>
        setFollowers(response.data)
      );
      toggleError(false, '');
      checkRemainingRequests();
    } catch (error) {
      console.log(error);
      toggleError(true, 'this username does not exist');
      checkRemainingRequests();
    }
    setLoading(false);
  };
  const toggleError = (show, msg) => {
    setError({ show, msg });
  };
  useEffect(() => {
    checkRemainingRequests();
  }, []);

  return (
    <GithubContext.Provider
      value={{
        changeToDarkTheme,
        setChangeToDarkTheme,
        repos,
        followers,
        githubUser,
        remainingRequest,
        error,
        searchGithubUser,
        loading,
        setLoading,
      }}
    >
      {children}
    </GithubContext.Provider>
  );
};

// (https://api.github.com/users/giorgio324)
// (https://api.github.com/users/giorgio324/repos?per_page=100)
// (https://api.github.com/users/giorgio324/followers)
// (https://api.github.com/rate_limit)
