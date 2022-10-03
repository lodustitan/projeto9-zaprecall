import './App.css';
import Pergunta from './Components/Pergunta';
import React from 'react';


function ZapRecall({dados}) {

	const [respondidas, setRespondidas] = React.useState(0);
	// const [todasResp, setTodasResp] = React.useState(dados.length);

	return (
		<div className="App">
			<header className="App-header">
				{dados.map((data, index)=>{
					return <Pergunta index={index+1} pergunta={data.Question} resposta={data.Answer} respondidas={{respondidas, setRespondidas}} />
				})}
			</header>
			<footer>
				<p>{respondidas}/{dados.length} CONCLUÍDOS</p>
			</footer>
		</div>
	);
}

export default ZapRecall;
