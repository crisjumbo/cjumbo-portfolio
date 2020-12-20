import styled from 'styled-components';
import {Link} from 'react-router-dom';

export const SSuperMain = styled.main`
    max-width: 100vw;
    position: relative;
    overflow: hidden;
    background-color: rgb(22, 18, 26);
    .div_container{
transition-property: transform;
transition-duration: 1s;
transition-timing-function: ease;
position: absolute;
width: 100vw;
height:100%;
top: 0;
left: 0;
    }
`