import React, { useContext, useState } from 'react';
import { GithubContext } from '../../Context/context';
import { StyledError, StyledSearch } from './styles';
const Search = () => {
  const [user, setUser] = useState('');
  const { remainingRequest, error } = useContext(GithubContext);
  const handleSubmit = (e) => {
    e.preventDefault();
    if (user) {
      setUser('');
    }
  };
  return (
    <>
      <StyledError>{error.show && <p>{error.msg}</p>}</StyledError>
      <StyledSearch>
        <form onSubmit={handleSubmit}>
          <div>
            <input
              type='text'
              placeholder='Enter github user'
              value={user}
              onChange={(e) => {
                setUser(e.target.value);
              }}
            />
            <button type='submit'>SEARCH</button>
          </div>
        </form>
        <h3>requests: {remainingRequest}/60</h3>
      </StyledSearch>
    </>
  );
};

export default Search;
