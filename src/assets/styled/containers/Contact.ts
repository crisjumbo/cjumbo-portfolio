/*
 ██████╗ ██████╗ ███╗   ██╗████████╗ █████╗  ██████╗████████╗
██╔════╝██╔═══██╗████╗  ██║╚══██╔══╝██╔══██╗██╔════╝╚══██╔══╝
██║     ██║   ██║██╔██╗ ██║   ██║   ███████║██║        ██║   
██║     ██║   ██║██║╚██╗██║   ██║   ██╔══██║██║        ██║   
╚██████╗╚██████╔╝██║ ╚████║   ██║   ██║  ██║╚██████╗   ██║   
 ╚═════╝ ╚═════╝ ╚═╝  ╚═══╝   ╚═╝   ╚═╝  ╚═╝ ╚═════╝   ╚═╝   
*/
import styled from 'styled-components';

export const SMain = styled.div`
background-color: #1b1720;
color: #f3e8e8;
align-items: center;
text-align: center;
flex-direction: column;
display: flex;
height:100%;
padding-top: 30px;
`;

export const SFormBox = styled.div`
background-color: transparent;
display: flex;
justify-content: space-between;
width: 600px;
height: 235px;
flex-direction: column;
margin-top: 40px;
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
height: 25px;
background-color: transparent;
display: flex;
justify-content: space-between;
`;

export const STextarea = styled.textarea`
width: 100%;
height: 125px;
border: none;
font-size: 15px;
color: #f3e8e8;
background-color: transparent;
`;

export const SSubmit = styled.input`
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
height: 100%;
padding-bottom: 3px;
position: relative;
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