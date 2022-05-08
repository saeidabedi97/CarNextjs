import { SurveyAnswerContainer1, SurveyContainer, SurveyExplain, SurveyHeader, SurveyInformationPage, SurveyQuestion1, SurveyQuestionContainer } from "../styles/Survey.style";
import { motion } from "framer-motion";
export default function Survey(){
    return (
        <SurveyInformationPage as={motion.div} initial={{width:0}} animate={{width:"100%"}} exit={{x:window.innerWidth, transition:{duration:6}}}>
        <SurveyContainer>
            <SurveyHeader>Hello, Thank you for deciding filling our survey.</SurveyHeader>
            <SurveyExplain>This survey helps us to improve our features in our cars
                And also adding more options to BMW M8. 
            </SurveyExplain>
            <hr/>
        <SurveyQuestionContainer>
            <SurveyQuestion1>How satisifed are you with the website?</SurveyQuestion1>
            <SurveyAnswerContainer1>
                <input type="radio" id="Satisfied" value="Satisfied"></input>
                <label htmlFor="Satisfied">Satisified</label>
                <input type="radio" id="somehowsatisfied" value="somehowsatisfied"></input>
                <label htmlFor="somehowsatisfied">Somehow Satisfied</label>
                <input type="radio" id="notsatisfied" value="notsatisfied"></input>
                <label htmlFor="notsatisfied">not satisfied</label>
            </SurveyAnswerContainer1>
        </SurveyQuestionContainer>
        


        </SurveyContainer>
        </SurveyInformationPage>
    )
}