import { createContext, useEffect, useState } from 'react';
import { userData } from '../Data/staticDataUser';
import { userFollowers } from '../Data/staticDataFollowers';
import { userRepos } from '../Data/staticDataRepos';
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
  return (
    <GithubContext.Provider
      value={{
        changeToDarkTheme,
        setChangeToDarkTheme,
        repos,
        followers,
        githubUser,
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
