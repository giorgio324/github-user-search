import React, { useContext } from 'react';
import { NavWrapper, StyledNav, StyledThemeButton } from './styles';
import { FiSun, FiMoon } from 'react-icons/fi';
import { GithubContext } from '../../Context/context';
import { useAuth0 } from '@auth0/auth0-react';
const Navbar = () => {
  // auth0 methods
  const { isAuthenticated, logout, user } = useAuth0();
  // global context stuff
  const { changeToDarkTheme, setChangeToDarkTheme } = useContext(GithubContext);
  // checks if user is logged in
  const isUser = isAuthenticated && user;

  return (
    <NavWrapper>
      <StyledNav>
        <div>
          {isUser && user.picture && <img src={user.picture} alt='' />}
          {isUser && user.name && (
            <h4 className='username'>{user.name.toUpperCase()}</h4>
          )}
          {isUser ? (
            <div>
              <button
                className='logout'
                onClick={() =>
                  logout({ logoutParams: { returnTo: window.location.origin } })
                }
              >
                logout
              </button>
            </div>
          ) : (
            ''
          )}
        </div>
        <StyledThemeButton
          onClick={() => setChangeToDarkTheme(!changeToDarkTheme)}
        >
          {changeToDarkTheme ? <FiMoon /> : <FiSun />}
        </StyledThemeButton>
      </StyledNav>
    </NavWrapper>
  );
};

export default Navbar;
