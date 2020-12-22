import styled from 'styled-components';
import {Link} from 'react-router-dom';
import {device} from '../layouts/index';

export const Logo = styled.img`
width: 60px;
height: 60px;
transition-property: opacity;
transition-duration: 1s;
transition-timing-function: ease;
@media ${device.sixes}{
    width: 50px;
    height: 50px;
}
`
export const StyledButton = styled.button`
height: 30px;
text-align: center;
display: grid;
align-items: center;
width: 105px;
border-radius: 5px;
background: linear-gradient(#c4c8c9,#486268);
font-size: 14px;
cursor: pointer;
@media ${device.sixes}{
    height: 25px;
    width:85px;
    font-size: 12px;
}
`;
export const StyledList = styled.ul`
width: 250px;
margin-left: 60px;
margin-right: 60px;
display: flex;
align-items: center;
justify-content: space-between;
@media ${device.nines}{
    justify-center: space-around;
    align-items: center;
    margin-left:10px;
    margin-right:10px;
}
`;
export const LogoContainer = styled(Link)`
width: 60px;
height: 60px;
border-radius: 50%;
position: relative;
overflow: hidden;
transition: transform 2s;
border: 1px solid black;
`;
export const StyledHeader = styled.header`
padding: 0 70px;
max-width: 100vw;
`;
export const StyledNav = styled.nav`
    padding-top: 10px;
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
`;
export const SubNav = styled.div`
height: calc(100% - 50px);
display: flex;
align-items: center;
justify-content: space-between;
`