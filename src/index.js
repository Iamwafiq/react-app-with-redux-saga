import React from 'react'
import { render } from 'react-dom'
import App from './routes'
import './index.scss'
import { Provider } from 'react-redux'
import configureStore from './store';

const initialState = {};
const store = configureStore(initialState);

render(<Provider store={store}>
    	<App/>
	</Provider>, document.getElementById('root'))
