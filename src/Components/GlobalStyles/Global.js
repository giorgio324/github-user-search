import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
 *{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
 }
 body{
  font-size: 1.15em;
  font-family: 'Poppins', sans-serif;
 }
 ul {
	list-style-type: none;
 }
 a {
	text-decoration: none;
 }
`;
export default GlobalStyles;
