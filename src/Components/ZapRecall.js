import React from 'react';
import styled from 'styled-components';

import Pergunta from './Pergunta';

import { BsXCircleFill, BsQuestionCircleFill, BsFillCheckCircleFill } from "react-icons/bs";

function ZapRecall({dados}){

	const [respondidas, setRespondidas] = React.useState(0);
    const [listaRespostas, setListaRespostas] = React.useState([]);

    return(
        <>
            <HeaderBase>
				{dados.map((data, index)=>{
					return <Pergunta 
                                index={index+1} 
                                pergunta={data.Question} 
                                resposta={data.Answer} 
                                respondidas={{respondidas, setRespondidas, listaRespostas, setListaRespostas}} 
                            />
				})}
			</HeaderBase>
			<FooterBase>
				<p>{respondidas}/{dados.length} CONCLUÍDOS</p>
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