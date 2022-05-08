import { InputText, SubmitButton, SurveyAnswerContainer1, SurveyAnswerContainer2, SurveyAnswerContainer3, SurveyAnswerContainer4, SurveyContainer, SurveyExplain, SurveyHeader, SurveyInformationPage, SurveyQuestion1, SurveyQuestion2, SurveyQuestion3, SurveyQuestion4, SurveyQuestionContainer } from "../styles/Survey.style";
import { motion } from "framer-motion";
import { useState } from "react";
import axios from 'axios';
export default function Survey(){
    const [description, setDescription] = useState(""); 
    

    function submitHandler(e:React.FormEvent<HTMLFormElement>){
        e.preventDefault(); 
        axios.post("api/form",{description});
    }

    return (
        <SurveyInformationPage as={motion.div} initial={{width:0}} animate={{width:"100%"}} exit={{x:window.innerWidth, transition:{duration:6}}}>
        <SurveyContainer>
            <SurveyHeader>Hello, Thank you for deciding filling our survey.</SurveyHeader>
            <SurveyExplain>This survey helps us to improve our features in our cars
                And also adding more options to BMW M8. 
            </SurveyExplain>
            <hr/>
        <SurveyQuestionContainer onSubmit={submitHandler}>
            <SurveyQuestion1>How satisifed are you with the website?</SurveyQuestion1>
            <SurveyAnswerContainer1>
                <input type="radio" id="Satisfied" value="Satisfied" name="first" ></input>
                <label htmlFor="Satisfied">Satisified</label>
                <input type="radio" id="somehowsatisfied" value="somehowsatisfied" name="first"></input>
                <label htmlFor="somehowsatisfied">Somehow Satisfied</label>
                <input type="radio" id="notsatisfied" value="notsatisfied" name="first"></input>
                <label htmlFor="notsatisfied">not satisfied</label>
            </SurveyAnswerContainer1>
            <SurveyQuestion2>What do you think about the price? </SurveyQuestion2>
            <SurveyAnswerContainer2>
                <input type="radio" id="expensive" value="expensive" name="second"></input>
                <label htmlFor="expensive">Expensive</label>
                <input type="radio" id="goodPrice" value="goodPrice" name="second"></input>
                <label htmlFor="goodPrice">good price</label>
                <input type="radio" id="cheap" value="cheap" name="second"></input>
                <label htmlFor="cheap">Cheap</label>
            </SurveyAnswerContainer2>
            <SurveyQuestion3>How good is our costumer service?</SurveyQuestion3>
            <SurveyAnswerContainer3>
                <input type="radio" id="good" value="good" name="third"></input>
                <label htmlFor="good">Good</label>
                <input type="radio" id="notbad" value="notbad" name="third"></input>
                <label htmlFor="notbad">Not bad</label>
                <input type="radio" id="bad" value="bad" name="third"></input>
                <label htmlFor="bad">bad</label>
            </SurveyAnswerContainer3>
            <SurveyQuestion4>Tell us about your exprience with bmw cars!</SurveyQuestion4>
            <SurveyAnswerContainer4>
                <InputText type="text" id="feedbackText" onChange={(e) => setDescription(e.target.value)} value={description}></InputText>
            </SurveyAnswerContainer4>
            <SubmitButton type="submit">Submit</SubmitButton>
        </SurveyQuestionContainer>
        


        </SurveyContainer>
        </SurveyInformationPage>
    )
}