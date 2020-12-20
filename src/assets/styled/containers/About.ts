/*
██████╗ ██████╗  ██████╗      ██╗███████╗ ██████╗████████╗███████╗
██╔══██╗██╔══██╗██╔═══██╗     ██║██╔════╝██╔════╝╚══██╔══╝██╔════╝
██████╔╝██████╔╝██║   ██║     ██║█████╗  ██║        ██║   ███████╗
██╔═══╝ ██╔══██╗██║   ██║██   ██║██╔══╝  ██║        ██║   ╚════██║
██║     ██║  ██║╚██████╔╝╚█████╔╝███████╗╚██████╗   ██║   ███████║
╚═╝     ╚═╝  ╚═╝ ╚═════╝  ╚════╝ ╚══════╝ ╚═════╝   ╚═╝   ╚══════╝
*/
import styled from 'styled-components';

export const SMain = styled.div`
background-color: transparent;
color: #f3e8e8;
display: grid;
justify-content: center;
align-items: center;
height:100%;
transition-property: transform;
transition-duration: 0.9s;
transition-timing-function: ease;
`;

export const SSection = styled.section`
width: 1070px;
height: 350px;
position: relative;
div{
width: 100%;
height: 40px;
display: flex;
justify-content: space-between;
}
`;

export const SButton = styled.button`
height: inherit;
width: 125px;
background: linear-gradient(#85b9c7,#acf8d2);
border: none;
font-size: 15px;
`
export const STextCard = styled.p`
width: 100%;
height: 205px;
text-align: center;
position: absolute;
left: 0;
bottom: 50px;
`