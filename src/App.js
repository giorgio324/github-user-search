import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import GlobalStyles from './Components/GlobalStyles/Global';
import Dashboard from './Pages/Dashboard';
import Error from './Pages/Error';
import Login from './Pages/Login';
const lightTheme = {
  backgroundColors: {
    primary: '#ebfbff',
  },
  fontColors: {},
  fonts: {
    primary: "'Poppins', sans-serif;",
  },
};
function App() {
  return (
    <ThemeProvider theme={lightTheme}>
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
