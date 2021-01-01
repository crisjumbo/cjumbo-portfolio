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

export const SSpan = styled.a`
  width: 25px;
  height: 100%;
  cursor: pointer;
  margin-right: 10px;
  margin-top: 5px;
  position: absolute;
  right: 0;
`;
export const SMain = styled.div`
  display: flex;
  padding-top: 30px;
  align-items: center;
  text-align: center;
  flex-direction: column;
  width: 100%;
  height: 100%;
  h2 {
    color: #ccd6dd;
    margin-bottom: 1.5rem;
    @media ${device.tablet} {
      margin-bottom: 1.5rem;
    }
  }
`;
export const SSection = styled.section`
  width: 100%;
  height: 270px;
  border-radius: 5px;
  position: relative;
  flex-wrap: wrap;
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: 0 15px;
  @media ${device.laptop} {
    justify-content: center;
  }
  @media ${device.tablet} {
    justify-content: center;
  }
`;
export const SCard = styled.div`
width: 400px;
height: 230px;
margin-bottom:2.5rem;
}
@media ${device.tablet}{
  width:350px; 
  margin-bottom: 2.5rem;
}
`;
export const SCardHeader = styled.a.attrs((props) => ({
  rel: 'noreferrer',
  target: '_blank',
  href: props.href || '#',
}))`
  height: 15%;
  width: inherit;
  position: relative;
  background: linear-gradient(#acf8d2, #85b9c7);
  display: grid;
  justify-content: center;
  align-items: center;
  color: black;
  cursor: pointer;
  ${(props) =>
    props.className === 'hot' &&
    `
background:linear-gradient(#FFEA61, #FFDD3C);
`}
`;
export const SCardBody = styled.div`
  width: 100%;
  height: 200px;
`;
export const CardBodyBack = styled.div`
  height: 100%;
  width: 100%;
  padding-top: 20px;
  padding-bottom: 20px;
  padding-left: 5px;
  padding-right: 5px;
  background-color: rgb(50, 96, 108);
  position: absolute;
  left: 0;
  bottom: 100%;
  transition-delay: 0.5s;
  transition-duration: 1s;
  transition-property: transform;
  transition-timing-function: ease;
  h3 {
    font-size: 14px;
    margin-bottom: 5px;
  }
  p {
    font-size: 12px;
  }
`;
export const CardBodyFront = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  transition-delay: 0.5s;
  transition-duration: 1s;
  transition-property: transform;
  transition-timing-function: ease;
  left: 0;
`;
export const CardBodyContainer = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  overflow: hidden;
  &:hover ${CardBodyBack}, &:hover ${CardBodyFront} {
    transform: translateY(100%);
  }
`;
export const CardBodyImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
