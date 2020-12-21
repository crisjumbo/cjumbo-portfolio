import styled from 'styled-components';

export const SSuperMain = styled.main`
    max-width: 100vw;
    position: relative;
    overflow: hidden;
    .div_container{
background-color: rgb(22, 18, 26);
transition-property: transform, z-index;
transition-duration: 1s;
transition-timing-function: linear;
position: absolute;
width: 100vw;
height:100%;
top: 0;
left: 0;
    }
`