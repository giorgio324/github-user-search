import React, { useContext, useState } from 'react';
import { NavWrapper, StyledNav, StyledThemeButton } from './styles';
import errorImg from '../../Assets/Images/404.svg';
import { FiSun, FiMoon } from 'react-icons/fi';
import { GithubContext } from '../../Context/context';
const Navbar = () => {
  const { changeToDarkTheme, setChangeToDarkTheme } = useContext(GithubContext);
  return (
    <NavWrapper>
      <StyledNav>
        <div>
          <img src={errorImg} alt='' />
          <div>
            <h4>{'giorgikochuashvili@gmail'}</h4>
            <button className='logout'>logout</button>
          </div>
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
