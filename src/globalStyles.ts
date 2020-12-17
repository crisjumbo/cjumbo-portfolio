import { createGlobalStyle } from 'styled-components';

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
