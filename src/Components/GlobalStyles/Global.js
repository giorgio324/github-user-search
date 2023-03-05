import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
 @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300&display=swap');
 *{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
 }
 body{
  font-size: 1.15em;
 }
 ul {
	list-style-type: none;
 }
 a {
	text-decoration: none;
 }
`;
export default GlobalStyles;
