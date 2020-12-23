/*
 ██████╗ ██████╗ ███╗   ██╗████████╗ █████╗  ██████╗████████╗
██╔════╝██╔═══██╗████╗  ██║╚══██╔══╝██╔══██╗██╔════╝╚══██╔══╝
██║     ██║   ██║██╔██╗ ██║   ██║   ███████║██║        ██║   
██║     ██║   ██║██║╚██╗██║   ██║   ██╔══██║██║        ██║   
╚██████╗╚██████╔╝██║ ╚████║   ██║   ██║  ██║╚██████╗   ██║   
 ╚═════╝ ╚═════╝ ╚═╝  ╚═══╝   ╚═╝   ╚═╝  ╚═╝ ╚═════╝   ╚═╝   
*/
import styled from 'styled-components';
import {device} from '../layouts/index';

export const SMain = styled.div`
background-color: #1b1720;
width:100vw;
max-width:100vw;
color: #f3e8e8;
align-items: center;
text-align: center;
flex-direction: column;
display: flex;
height:100%;
padding-top: 4rem;
h2{
   color: #CCD6DD;
}
`;

export const SFormBox = styled.form`
background-color: transparent;
display: flex;
justify-content: space-between;
width: 100vw;
max-width:100vw;
height: 235px;
flex-direction: column;
margin-top: 40px;
padding-left: 13%;
padding-right:13%;
`;
export const SUnderLine = styled.i`
height: 3px;
width: 100%;
position: absolute;
left: 0;
bottom: 0;
background: linear-gradient(#8bddf2,#345e68);
`

export const SNavBox = styled.div`
width: 100%;
background-color: transparent;
display: flex;
justify-content: space-between;
flex-wrap:wrap;
@media ${device.tablet}{
    justify-content:center;
    margin-bottom: 2rem;
}
@media ${device.mobileL}{
    justify-content: center;
    margin-bottom: 2rem;
}
`;

export const STextarea = styled.textarea`
width: 100%;
height: 125px;
border: none;
font-size: 15px;
color: #f3e8e8;
background-color: transparent;
`;

export const SSubmit = styled.button`
width: 100%;
background: linear-gradient(#8bddf2,#345e68);
color: #1b1720;
font-size: 15px;
border: none;
font-weight: 700;
height: 30px;
text-align: center;
display: grid;
align-items: center;
`

export const SInputBox = styled.div`
width: 180px;
height: 25px;
margin-bottom: 10px;
padding-bottom: 3px;
position: relative;
@media ${device.tablet}{
    margin-right: 20px;
}
`;

export const SInput = styled.input`
text-align: center;
font-size: 15px;
width: 100%;
height: 100%;
color: #f3e8e8;
background-color: transparent;
border: none;
`