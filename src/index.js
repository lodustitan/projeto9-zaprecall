import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import ZapRecall from './App';


import { dados } from './dados';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<React.StrictMode>
		<ZapRecall dados={dados} />
	</React.StrictMode>
);
