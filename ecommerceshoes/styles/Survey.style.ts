import styled from "styled-components";
import { color } from "../Utils/Colors";

export const SurveyInformationPage = styled.main`
  position: relative;
  background-color: #31393c;
  height: 713px;
  width: 100%;
`;

export const SurveyContainer = styled.div`
  background-color: ${color.blue};
  position: relative;
  top: 100px;
  width: 85%;
  height: 600px;
  left: 85px;
  border: 3px solid white;
  text-align: center;
`;
export const SurveyHeader = styled.h3`
  color: ${color.white};
  font-family: Arial;
  font-size: 25px;
  font-weight: 850;
`;

export const SurveyExplain = styled.p`
  color: ${color.white};
  font-family: Arial;
  font-size: 20px;
  font-weight: 500px;
`;

export const SurveyQuestionContainer = styled.form``;

export const SurveyQuestion = styled.p`
  color: ${color.white};
  font-family: Arial;
  font-size: 20px;
  font-weight: 250;
`;
export const SurveyAnswerContainer1 = styled.div`
  position: relative;
  left: 405px;
  display: flex;
  flex-direction: row;
  width: 45%;
  color: ${color.white};
  gap: 25px;
`;

export const SubmitButton = styled.button`
  position: absolute;
  top: 495px;
  left: 950px;
`;

export const InputText = styled.input`
  position: absolute;
  left: 105px;
  width: 250px;
  height: 150px;
`;
