/*
██████╗ ██████╗  ██████╗      ██╗███████╗ ██████╗████████╗███████╗
██╔══██╗██╔══██╗██╔═══██╗     ██║██╔════╝██╔════╝╚══██╔══╝██╔════╝
██████╔╝██████╔╝██║   ██║     ██║█████╗  ██║        ██║   ███████╗
██╔═══╝ ██╔══██╗██║   ██║██   ██║██╔══╝  ██║        ██║   ╚════██║
██║     ██║  ██║╚██████╔╝╚█████╔╝███████╗╚██████╗   ██║   ███████║
╚═╝     ╚═╝  ╚═╝ ╚═════╝  ╚════╝ ╚══════╝ ╚═════╝   ╚═╝   ╚══════╝
*/
import styled from 'styled-components';
import { device } from '../layouts/index';

export const SMain = styled.div`
  background-color: transparent;
  color: #f3e8e8;
  display: grid;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100vw;
  max-width: 100vw;
  transition-property: transform;
  transition-duration: 0.9s;
  transition-timing-function: ease;
`;

export const SSection = styled.section`
  height: 350px;
  width: 100vw;
  max-width: 100vw;
  padding-left: 1rem;
  padding-right: 1rem;
  position: relative;
  div {
    margin-top: 1rem;
    width: 100%;
    height: 40px;
    display: flex;
    justify-content: space-between;
  }
`;

export const SButton = styled.button`
  height: inherit;
  width: 125px;
  background: linear-gradient(#85b9c7, #acf8d2);
  border: none;
  font-size: 15px;
  @media ${device.tablet} {
    font-size: 12px;
    width: 90px;
    height: 40px;
  }
  @media ${device.fives} {
    font-size: 11px;
    width: 75px;
  }
  @media ${device.mobileL} {
    font-size: 9px;
    width: 60px;
    height: 30px;
  }
`;
export const STextCard = styled.p`
  height: 205px;
  text-align: center;
  position: absolute;
  left: 1.5rem;
  right: 1.5rem;
  bottom: 50px;
  @media ${device.mobileM} {
    font-size: 14px;
  }
`;
