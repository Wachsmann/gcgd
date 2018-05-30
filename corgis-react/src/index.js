import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { App } from './App';
import { Provider } from 'react-redux';
import { store } from './_helpers';

import { BrowserRouter } from 'react-router-dom'
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
	<BrowserRouter>
	  <Provider store={store}>
        <App />
    </Provider>
    </BrowserRouter>
	  , document.getElementById('root'));

