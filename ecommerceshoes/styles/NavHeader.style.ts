import styled from 'styled-components'
import { color } from '../Utils/Colors'

export const NavBarContainer = styled.nav`
    position:relative; 
    display:flex; 
    flex-direction:row; 
    gap:105px;
    height:70px;
    width:100%;
   background: rgba(0, 0, 0, 0.5);
border-radius: 16px;
box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
-webkit-backdrop-filter: blur(0px);
border: 1px solid rgba(255, 255, 255, 0.3);
position:fixed;
z-index:5;
`
export const NavItemsContainer = styled.ul`
position:relative; 
display:flex;
flex-direction:row; 
gap:100px;
left:5%;
list-style:none;
`
export const NavItem = styled.li`
margin-top:5%;
font-family:Arial; 
font-size:20px;
font-weight:550;
color:${color.white};
cursor:pointer;

`



export const NavLogoContainer = styled.div`
position:absolute;
width:5%;

left:1450px;
`

