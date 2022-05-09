import styled from "styled-components";
import { color } from "../Utils/Colors";

export const DetailsContainer = styled.main`
  position: relative;
  height: 700px;
  background-color: #31393c;
`;

export const CarSelectionContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  top: 150px;
  left: 1250px;
  gap: 25px;
  width: 55%;
`;

export const CarSelectionButton = styled.span`
  background-color: ${color.blue};
  border: 3px solid black;
  width: 15%;
  height: 35px;
  text-align: center;
  color: ${color.white};
  font-family: Arial;
  font-size: 15px;
  font-weight: 650;
  padding: 15px;
  cursor: pointer;
`;
export const CarSelectionButton2 = styled.span`
  background-color: ${color.purple};
  border: 3px solid black;
  width: 15%;
  height: 40px;
  text-align: center;
  color: ${color.white};
  font-family: Arial;
  font-size: 15px;
  font-weight: 650;
  padding: 15px;
  cursor: pointer;
`;

export const BlueContainer = styled.div`
  &.sendback {
    position: relative;
    background-color: ${color.blue};
    width: 1150px;
    height: 450px;
    border: 3px solid white;
    border-radius: 5%;
    top: -80px;
    z-index: 1;
    display: flex;
    flex-direction: column;
  }

  &.sendfront {
    position: relative;
    background-color: ${color.blue};
    width: 1150px;
    height: 450px;
    border: 3px solid white;
    border-radius: 5%;
    top: -80px;
    z-index: 2;
  }
`;

export const BlueContainerHeader = styled.h1`
  margin: 5% 0% 0% 15%;
  color: ${color.white};
  font-family: Arial;
  font-size: 35px;
  font-weight: 1000;
`;

export const BlueSubtitle = styled.p`
  color: ${color.white};
  font-family: Arial;
  font-size: 20px;
  margin-left: 15%;
  font-weight: 350;
`;

export const BlueListContainer = styled.ul`
  display: flex;
  flex-direction: column;
  margin-left: 13.5%;
  font-family: Arial;
  font-size: 20px;
  color: ${color.white};
  gap: 15px;
`;

export const BlueListItem1 = styled.li``;

export const BlueListItem2 = styled.li``;

export const BlueListItem3 = styled.li``;
export const BlueListItem4 = styled.li``;

export const PurpleContainer = styled.div`
  &.sendback {
    position: relative;
    background-color: ${color.purple};
    width: 1150px;
    height: 450px;
    border: 3px solid white;
    border-radius: 5%;
    top: -470px;
    left: 70px;
    z-index: 1;
    display: flex;
    flex-direction: column;
  }
  &.sendfront {
    position: relative;
    background-color: ${color.purple};
    width: 1150px;
    height: 450px;
    border: 3px solid white;
    border-radius: 5%;
    top: -470px;
    left: 70px;
    z-index: 4;
    display: flex;
    flex-direction: column;
  }
`;
export const PurpleContainerHeader = styled.h2`
  margin: 5% 0% 0% 15%;
  color: ${color.white};
  font-family: Arial;
  font-size: 35px;
  font-weight: 1000;
`;

export const PurpleSubtitle = styled.p`
  color: ${color.white};
  font-family: Arial;
  font-size: 20px;
  margin-left: 15%;
  font-weight: 350;
`;

export const PurpleListContainer = styled.ul`
  display: flex;
  flex-direction: column;
  margin-left: 13.5%;
  font-family: Arial;
  font-size: 20px;
  color: ${color.white};
  gap: 15px;
`;
export const PurpleListItem1 = styled.li``;

export const PurpleListItem2 = styled.li``;
export const PurpleListItem3 = styled.li``;
export const PurpleListItem4 = styled.li``;
