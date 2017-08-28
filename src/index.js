import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import '../node_modules/react-fontawesome';
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import reducer from './reducers';

const store = createStore(reducer)

ReactDOM.render(
<Provider store={store}>
  <Router>
    <App />
  </Router>
</Provider>,document.getElementById('root'));
registerServiceWorker();
