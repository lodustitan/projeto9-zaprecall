import React from "react";
import styled from "styled-components";

// Image
import zaprecall_logo from "../Images/image 1.png"

function Inicio({setTela}){

    return (
        <Base>
            <img src={zaprecall_logo} alt="sla" />
            <span>ZapRecall</span>
            <Botao onClick={()=>setTela(1)}>Iniciar Recall!</Botao>
        </Base>
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

export default Inicio;