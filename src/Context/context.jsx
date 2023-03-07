import { createContext, useEffect, useState } from 'react';
import { userData } from '../Data/staticDataUser';
import { userFollowers } from '../Data/staticDataFollowers';
import { userRepos } from '../Data/staticDataRepos';
import axios from 'axios';
export const GithubContext = createContext();

export const GithubProvider = ({ children }) => {
  const [changeToDarkTheme, setChangeToDarkTheme] = useState(getTheme());
  useEffect(() => {
    localStorage.setItem('dark', JSON.stringify(changeToDarkTheme));
  }, [changeToDarkTheme]);

  function getTheme() {
    const savedTheme = JSON.parse(localStorage.getItem('dark'));
    return savedTheme || false;
  }
  const [githubUser, setGithubUser] = useState(userData);
  const [followers, setFollowers] = useState(userFollowers);
  const [repos, setRepos] = useState(userRepos);
  const [remainingRequest, setRemeiningRequest] = useState(0);
  const [loading, setLoading] = useState(0);
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
      }}
    >
      {children}
    </GithubContext.Provider>
  );
};

// - [Root Endpoint](https://api.github.com)
// - [Get User](https://api.github.com/users/giorgio324)
// - [Repos](https://api.github.com/users/giorgio324/repos?per_page=100)
// - [Followers](https://api.github.com/users/giorgio324/followers)
// - [Rate Limit](https://api.github.com/rate_limit)
