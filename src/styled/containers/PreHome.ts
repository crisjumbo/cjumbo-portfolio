/*
██████╗ ██████╗ ███████╗██╗  ██╗ ██████╗ ███╗   ███╗███████╗
██╔══██╗██╔══██╗██╔════╝██║  ██║██╔═══██╗████╗ ████║██╔════╝
██████╔╝██████╔╝█████╗  ███████║██║   ██║██╔████╔██║█████╗  
██╔═══╝ ██╔══██╗██╔══╝  ██╔══██║██║   ██║██║╚██╔╝██║██╔══╝  
██║     ██║  ██║███████╗██║  ██║╚██████╔╝██║ ╚═╝ ██║███████╗
╚═╝     ╚═╝  ╚═╝╚══════╝╚═╝  ╚═╝ ╚═════╝ ╚═╝     ╚═╝╚══════╝
*/
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { device } from '../layouts/index';
import { pulseVanish } from '../animation';
export const SMain = styled.main`
  width: 100vw;
  height: 100vh;
  display: grid;
  align-items: center;
  justify-content: center;
  background-color: rgb(22, 18, 26);
`;
export const SImg = styled.img`
  max-width: 145px;
  max-height: 145px;
  border-radius: 50%;
  @media ${device.mobileM} {
    max-width: 100px;
    max-height: 100px;
  }
`;

export const SWrapper = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 35%;
  p {
    color: #f3e8e8;
    font-size: 38px;
    font-weight: 700;
    text-align: center;
    @media ${device.tablet} {
      font-size: 30px;
    }
    @media ${device.mobileM} {
      font-size: 20px;
    }
  }
`;
export const SLink = styled(Link)`
  position: relative;
  top: -30px;
  z-index: 20;
  &:after {
    content: '';
    border-radius: 50%;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    animation-name: ${pulseVanish};
    animation-duration: 1.25s;
    animation-iteration-count: infinite;
    position: absolute;
    z-index: -10;
  }
`;
