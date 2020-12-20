import { createGlobalStyle } from 'styled-components';

/* This Styled Component will work as a Provider for the App but instead of data
   It will provider Styles.
   It has to be a parallel component to the Router */
const GlobalStyle = createGlobalStyle`
*,*::before,*::after{

    margin:0;
    padding:0;
    box-sizing: border-box;
    font-family: Arial, Helvetica, sans-serif, ;
    list-style: none;
    text-decoration:none;
}
`;

export default GlobalStyle;
