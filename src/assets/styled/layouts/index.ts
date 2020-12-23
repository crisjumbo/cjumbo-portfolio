import styled from 'styled-components';

//-- Different device's sizes
const size = {
    mobileS: '320px',
    mobileM: '375px',
    mobileL: '425px',
    tablet: '768px',
    laptop: '1024px',
    laptopL: '1440px',
    desktop: '2560px', 
    fives: '515px',
    nines: '900px',
    sixes: '630px',
  }

  //--  Min means from the top size till the min
  export const device = {
    mobileS: `(max-width: ${size.mobileS})`,
    mobileM: `(max-width: ${size.mobileM})`,
    mobileL: `(max-width: ${size.mobileL})`,
    tablet: `(max-width: ${size.tablet})`,
    laptop: `(max-width: ${size.laptop})`,
    laptopL: `(max-width: ${size.laptopL})`,
    desktop: `(max-width: ${size.desktop})`,
    desktopL: `(max-width: ${size.desktop})`,
    nines: `(max-width: ${size.nines})`,
    sixes: `(max-width: ${size.sixes})`,
    fives: `(max-width: ${size.fives})`,
  };
  
export const StyledLayout = styled.div`
display: grid;
grid-template-rows: 195px 1fr 45px;
height:100vh;
max-width:100vw;
@media ${device.nines}{
  grid-template-rows: 150px 1fr 40px;
}
@media ${device.sixes}{
  grid-template-rows: 150px 1fr 30px;
}
`


