import { useContext } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import GlobalStyles from './Components/GlobalStyles/Global';
import { GithubContext } from './Context/context';
import Dashboard from './Pages/Dashboard';
import Error from './Pages/Error';
import Login from './Pages/Login';
const lightTheme = {
  backgroundColors: {
    body: '#F7F1E5',
    card: '#CFB997',
  },
  fontColors: {
    primary: 'black',
    error: '#FF0303',
  },
  fonts: {
    primary: "'Poppins', sans-serif;",
  },
  transition: 'background-color 0.5s ease-in-out',
};
const darkTheme = {
  backgroundColors: {
    body: '#333',
    card: '#F9F3F3',
  },
  fontColors: {
    primary: 'white',
    error: '#FF0303',
  },
  fonts: {
    primary: "'Poppins', sans-serif;",
  },
  transition: 'background-color 0.5s ease-in-out',
};
function App() {
  const { changeToDarkTheme } = useContext(GithubContext);
  return (
    <ThemeProvider theme={changeToDarkTheme ? darkTheme : lightTheme}>
      <GlobalStyles />
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Dashboard />} />
          <Route path='/login' element={<Login />} />
          <Route path='*' element={<Error />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
