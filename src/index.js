import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import 'semantic-ui-css/semantic.min.css';
import {Provider} from "react-redux"
import {createStore} from 'redux'
import reducer from './reducer'


/// has the reduce method inside 
const store = createStore(reducer,
window.__REDUX_DEVTOOLS_EXTENSION__ && 
window.__REDUX_DEVTOOLS_EXTENSION__())


ReactDOM.render(
  <Provider store={store}>
    <App />
    </Provider>,
 document.getElementById('root'));
