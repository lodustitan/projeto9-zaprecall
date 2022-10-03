
import styled from 'styled-components';
import React from 'react';

import ZapRecall from './ZapRecall';
import Inicio from './Inicio';

function App({dados}) {

	const [tela, setTela] = React.useState(0); // 0-inicio / 1-zapRecall /
    const [deckID, setDeckID] = React.useState(1);
	const [respondidas, setRespondidas] = React.useState(0);
	const [paraResponder, setParaResponder] = React.useState(0);

	return (
		<AppBase>
			{tela===0 && <Inicio setTela={setTela} dados={dados} deckID={{deckID, setDeckID}} respondidas={{paraResponder, setParaResponder}} />}
			{tela===1 && <ZapRecall setTela={setTela} dados={dados} deckID={{deckID, setDeckID}} respondidas={{respondidas, setRespondidas, paraResponder}} />}
		</AppBase>
	);
}


const AppBase = styled.div`
	@import url('https://fonts.googleapis.com/css2?family=Righteous&display=swap');

	*{
		font-family: 'Righteous', cursive;
	}
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	text-align: center;
	height: 100vh;
	background-color: #FB6B6B;
`;

export default App;
