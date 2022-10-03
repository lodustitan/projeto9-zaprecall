import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './Components/App';


import { dados } from './dados';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<React.StrictMode>
		<App dados={dados} />
	</React.StrictMode>
);
