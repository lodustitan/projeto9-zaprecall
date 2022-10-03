import React from "react";
import styled from "styled-components";

import { FiPlay } from "react-icons/fi";
import { BsXCircleFill, BsQuestionCircleFill, BsFillCheckCircleFill } from "react-icons/bs";
import { IoReloadOutline } from "react-icons/io5";




export default function Pergunta(props){

    const [ step, setStep ] = React.useState(0);
    const [ choice, setChoice ] = React.useState(1);

    return(
        <Base theme={step} data-identifier="flashcard-index-item">
            {step===0 && <FirstStep text={"Pergunta "+props.index} setStep={setStep} />}
            {step===1 && <SecondStep text={props.pergunta} setStep={setStep} />}
            {step===2 && <ThirdStep text={props.resposta} setStep={setStep} setChoice={setChoice} ZapStatus={props.respondidas} />}
            {step===3 && <FourthStep text={"Pergunta "+props.index} status={choice} />}
        </Base>
    );
}

function FirstStep(props){

    function next(){
        props.setStep(1)
    }

    return (
        <>
            <span data-identifier="flashcard-show-btn">{props.text}</span>
            <FiPlay data-identifier="flashcard" onClick={next} />
        </>
    )
}
function SecondStep(props){

    function next(){
        props.setStep(2);
    }

    return (
        <>
            <p data-identifier="flashcard-question">{props.text}</p>
            <IoReloadOutline data-identifier="flashcard-index-item" onClick={next} />
        </>
    )
}
function ThirdStep(props){

    const {respondidas, listaRespostas, setListaRespostas} = props.ZapStatus;

    function finish(value){
        props.setStep(3);
        props.setChoice(value);
        if(value === 3) respondidas.setRespondidas(respondidas.respondidas+1);
        const newArr = [...listaRespostas, value];
        setListaRespostas(newArr);
    }

    return (
        <>
            <p data-identifier="flashcard-answer">{props.text}</p>
            <DivZap>
                <ButtonZap data-identifier="forgot-btn" onClick={() => finish(1)} color="#FF3030">Não lembrei</ButtonZap>
                <ButtonZap data-identifier="almost-forgot-btn" onClick={() => finish(2)} color="#FF922E">Quase não lembrei</ButtonZap>
                <ButtonZap data-identifier="zap-btn" onClick={() => finish(3)} color="#2FBE34">Zap!</ButtonZap>
            </DivZap>
        </>
    )
}
function FourthStep(props){
    return (
        <ThirdBase status={props.status}>
            <p data-identifier="flashcard-index-item">{props.text}</p>
            {props.status===1 && <BsXCircleFill data-identifier="flashcard-status" />}
            {props.status===2 && <BsQuestionCircleFill data-identifier="flashcard-status" />}
            {props.status===3 && <BsFillCheckCircleFill data-identifier="flashcard-status" />}
        </ThirdBase>
    )
}

const Base = styled.div`
    box-sizing: none;
    display: flex;
    padding: 1rem;
    width: 80%;
    border-radius: 8px;
    color: #333;
    margin-bottom: 1rem;
    box-shadow: 0px 4px 5px 0px #00000026;
    ${ props => {
        if(props.theme === 1) {
            return (
                `background-color: #ffffd4;
                justify-content: space-between;
                flex-direction: column;
                align-items: flex-end;
                `
            )
        }
        else if (props.theme === 2){
            return (
                `background-color: #ffffd4;
                flex-direction: column;
                align-items: center;
                justify-content: space-between;
                `
            )
        }
        else {
            return (
                `background-color: #f0f0f0;
                justify-content: space-between;
                align-items: center;
                `
            )
        }
    }};
    p, span{
        font-weight: 700;
    }
    p{
        width: 100%;
        text-align: start;
        margin-bottom: 1rem;
    }
`;

const ButtonZap = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
    border-radius: 8px;
    background-color: ${props => props.color};
    width: calc(100% / 3.2);
    height: 3rem;
    font-size: 1rem;
`;
const DivZap = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
`;
const ThirdBase = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    color: ${props => {
        if(props.status === 1){ return "#FF3030;" }
        else if(props.status === 2){ return "#FF922E;" }
        else if(props.status === 3){ return "#2FBE34;" }
    }};
    text-decoration: line-through;
`;