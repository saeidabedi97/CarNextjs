import {
  InputText,
  SubmitButton,
  SurveyAnswerContainer1,
  SurveyContainer,
  SurveyExplain,
  SurveyHeader,
  SurveyInformationPage,
  SurveyQuestion,
  SurveyQuestionContainer,
} from "../styles/Survey.style";
import { motion } from "framer-motion";
import { useState } from "react";
import axios from "axios";
export default function Survey() {
  const [description, setDescription] = useState("");

  function submitHandler(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    axios.post("api/form", { description });
  }

  return (
    <SurveyInformationPage
      as={motion.div}
      initial={{ width: 0 }}
      animate={{ width: "100%" }}
      exit={{ x: window.innerWidth, transition: { duration: 6 } }}
    >
      <SurveyContainer>
        <SurveyHeader>
          Hello, Thank you for deciding giving Feedback.
        </SurveyHeader>
        <SurveyExplain>
          This helps us to improve our features in our cars And also adding more
          options to BMW M8.
        </SurveyExplain>
        <hr />
        <SurveyQuestionContainer onSubmit={submitHandler}>
          <SurveyQuestion>
            Tell us about your exprience with bmw cars!
          </SurveyQuestion>
          <SurveyAnswerContainer1>
            <InputText
              type="text"
              id="feedbackText"
              onChange={(e) => setDescription(e.target.value)}
              value={description}
            ></InputText>
          </SurveyAnswerContainer1>
          <SubmitButton type="submit">Submit</SubmitButton>
        </SurveyQuestionContainer>
      </SurveyContainer>
    </SurveyInformationPage>
  );
}
