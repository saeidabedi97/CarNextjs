import styled from 'styled-components'
import { color } from '../Utils/Colors'

export const Main = styled.main`
// background-color: ${color.bg};
position:relative; 
    height:330px;

`

export const BmwText = styled.p`
    font-family:Arial; 
    font-size: 105px; 
    font-weight: 850px;
    letter-spacing: 30px;
    color:${color.blue};
`
export const ImageContainer = styled.div`
    position:relative; 
    top:0px;
    width:100%;
`

export const IntroContainer = styled.div`
position:relative;
top:-700px;
left:35px;
height:250px;
width:50%;
`

export const IntroDescription = styled.p`
    font-family:Arial; 
    font-size:30px;
    font-weight:350;
    color:${color.white};
    position:absolute;
    top:105px;
    left:15px;
    
`

export const MlogoContainer = styled.div`
`

export const ButtonContainer = styled.div`
    position:relative; 
    display:flex;
    flex-direction:column; 
    gap:25px;
    left:55px;
    `
export const GoToDetailsButton = styled.span`
    color:${color.white};
    background-color:${color.blue};
    border-radius:15px;
    width:25%;
    text-align:center;
    padding:10px;
    font-family:Arial; 
    font-weight:450;
    cursor:pointer; 

`

export const FillTheSurveyButton = styled.span`
    color:${color.white};
    background-color:#7D8491;
    font-family:Arial; 
    font-weight:450;
    width:25%;
    padding:10px;
    text-align:center; 
    border-radius:15px;
    cursor:pointer; 
`

export const MainInformationContainer = styled.div`
    position:relative; 
    display:flex; 
    flex-direction;row; 
    gap:85px;
    top:-460px;
    left:150px;
    width:75%;
    height:15%;

`
export const PriceContainer = styled.div`
    color:${color.white};
    font-family:Arial; 
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
`
export const PriceInformation = styled.p`   
font-weight:1000;
font-size:23px;
`

export const PriceTitle = styled.p`
opacity:0.8;
font-size:18px;
`

export const PowerInformationContainer = styled.div`
    color:${color.white};
    font-family:Arial; 
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
`
export const PowerInformation = styled.p`
font-weight:1000;
font-size:23px;
`
export const PowerTitle = styled.p`
opacity:0.8;
font-size:18px;
`

export const FuelTypeContainer = styled.div`

     color:${color.white};
    font-family:Arial; 
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
`
export const FuelTypeInformation = styled.p`
font-weight:1000;
font-size:23px;
`
export const FuelTypeTitle = styled.p`
opacity:0.8;
font-size:18px;
`

