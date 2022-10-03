import React from "react";
import styled from "styled-components";

// Image
import zaprecall_logo from "../Images/image 1.png"

function Inicio(props){

    const [config, setConfig] = React.useState(0);
    const [deckMetaValue, setDeckMetaValue] = React.useState(0);

    function configurations(){
        switch (config) {
            case 0:
                setConfig(1); break;
            case 1:
                setConfig(2); break;
            case 2:
                setConfig(3); 
                props.setTela(1);
                props.respondidas.setParaResponder(deckMetaValue)
                break;
            default: break;
        }
        
    }

    return (
        <Base>
            <img src={zaprecall_logo} alt="sla" />
            <span>ZapRecall</span>
            {config===0? <DeckList dados={props.dados} deckID={props.deckID} /> : 
                        <DeckMeta data-identifier="goals-input" type="number" placeholder="Digite sua meta de zaps..." onChange={(e)=> setDeckMetaValue(parseInt(e.target.value))} />}
            <Botao data-identifier="start-btn" onClick={configurations}>Iniciar Recall!</Botao>
        </Base>
    )
}

function DeckList({dados, deckID}){
    return (
        <Select data-identifier="deck-selector" value={deckID.deckID} onChange={(e) => deckID.setDeckID(parseInt(e.target.value))}>
            {dados.map((data, index) => <option data-identifier="deck-option" key={index} value={data.ID}>{data.Deck}</option>)}
        </Select>
    )
}

const Base = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100%;
    *{
        margin-bottom: 2rem;
    }
    span{
        font-size: 2rem;
        color: white;
    }
    img{
        width: 136px;
        height: 161px;
    }
`;
const Botao = styled.div`
    cursor: pointer;
    box-sizing: none;
    display: flex;
    padding: 1rem;
    width: 250px;
    border-radius: 8px;
    color: #D70900;
    background-color: white;
    margin-bottom: 1rem;
    box-shadow: 0px 4px 5px 0px #00000026;
    justify-content: center;
    font-size: 1.5rem;
    
    p, span{
        font-weight: 700;
    }
    p{
        width: 100%;
        text-align: start;
        margin-bottom: 1rem;
    }
`;
const Select = styled.select`
    box-sizing: none;
    display: flex;
    width: 250px;
    height: 2rem;
    border-radius: 8px;
    color: #D70900;
    background-color: white;
    margin-bottom: 1rem;
    box-shadow: 0px 4px 5px 0px #00000026;
    justify-content: center;
`;
const DeckMeta = styled.input`
    box-sizing: none;
    display: flex;
    width: 250px;
    height: 2rem;
    border-radius: 8px;
    color: #D70900;
    background-color: white;
    margin-bottom: 1rem;
    box-shadow: 0px 4px 5px 0px #00000026;
    justify-content: center; 
`;

export default Inicio;