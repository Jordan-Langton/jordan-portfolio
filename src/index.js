import React from 'react';
import ReactDOM from 'react-dom';
import './CSS/global.css';
import App from './Controllers/App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
