import React from 'react';
import styled from 'styled-components';

import Pergunta from './Pergunta';

import { BsXCircleFill, BsQuestionCircleFill, BsFillCheckCircleFill } from "react-icons/bs";

function ZapRecall({dados, deckID, respondidas}){

    const [listaRespostas, setListaRespostas] = React.useState([]);

    function deckFilter(e){
        if(e.ID === deckID.deckID) return true;
        else return false;
    }

    return(
        <>
            <HeaderBase>
				{dados.filter(deckFilter)[0].Data.map((data, index)=>{
					return <Pergunta 
                                index={index+1} 
                                pergunta={data.Question} 
                                resposta={data.Answer} 
                                respondidas={{respondidas, listaRespostas, setListaRespostas}} 
                            />
				})}
			</HeaderBase>
			<FooterBase>
				<p>{respondidas.respondidas}/{(respondidas.paraResponder > 0 && respondidas.paraResponder < dados.filter(deckFilter)[0].Data.length)? respondidas.paraResponder: dados.filter(deckFilter)[0].Data.length} 
                CONCLUÍDOS</p>
                <div>
                    {listaRespostas.map((data,index) =>{
                        if(data===1){ return <BsXCircleFill style={{color: "#FF3030"}} /> }
                        else if(data===2){ return <BsQuestionCircleFill style={{color: "FF922E"}} /> }
                        else if(data===3){ return <BsFillCheckCircleFill style={{color: "#2FBE34"}}/> }
                    })}
                </div>
			</FooterBase>
        </>
    )
} 


const HeaderBase = styled.header`
    padding-top: 1rem;
    overflow-y: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 100%;
    font-size: calc(10px + 2vmin);
`;
const FooterBase = styled.footer`
display: flex;
flex-direction: column;
justify-content: center;
    background-color: white;
    height: 8rem;
    font-weight: 800;
    font-size: 1.5rem;
`;


export default ZapRecall;