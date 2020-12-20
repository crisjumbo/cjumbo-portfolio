/*
██╗  ██╗ ██████╗ ███╗   ███╗███████╗
██║  ██║██╔═══██╗████╗ ████║██╔════╝
███████║██║   ██║██╔████╔██║█████╗  
██╔══██║██║   ██║██║╚██╔╝██║██╔══╝  
██║  ██║╚██████╔╝██║ ╚═╝ ██║███████╗
╚═╝  ╚═╝ ╚═════╝ ╚═╝     ╚═╝╚══════╝
*/
import styled from 'styled-components';

export const SSeeMore = styled.div`
position: absolute;
top: 100%;
left: calc(50% - 100px);
width: 200px;
height: 25px;
text-decoration: underline;
`;
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
max-width: 100%;
height: 100%;
`
export const SSection = styled.section`
  width: 100%;
  height: 270px;
  border-radius: 5px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 15px;
`
export const SCard = styled.div`
width: 400px;
height: 230px;
`
export const SCardHeader = styled.a.attrs(props => ({
  rel:'noreferrer',
  target:'_blank',
  href: props.href || '#',
}))`
height: 30px;
width: inherit;
position: relative;
background: linear-gradient(#acf8d2,#85b9c7);
display: grid;
justify-content: center;
align-items: center;
color: black;
cursor: pointer;

`;
export const  SCardBody = styled.div`
    width: 100%;
    height: 200px;
`;
export const CardBodyBack = styled.div`
height: inherit;
width: inherit;
padding-top: 20px;
padding-bottom: 20px;
padding-left: 5px;
padding-right:5px;
background-color: rgb(50, 96, 108);
position: absolute;
left: 0;
bottom:100%;
transition-delay: 0.5s;
transition-duration: 1s;
transition-property: transform;
transition-timing-function: ease;
h3{
  font-size: 14px;
  margin-bottom: 5px;
}
p{
  font-size: 12px;
}
`;
export const CardBodyFront = styled.div`
width: inherit;
height: inherit;
position: absolute;
transition-delay: 0.5s;
transition-duration: 1s;
transition-property: transform;
transition-timing-function: ease;
left: 0;
`;
export const CardBodyContainer = styled.div`
width: inherit;
height: inherit;
position: relative;
overflow: hidden;
&:hover ${CardBodyBack},
&:hover ${CardBodyFront}{
  transform: translateY(100%);
}

`;
export const CardBodyImg = styled.img`
width: inherit;
height: inherit;
object-fit:cover;
`;