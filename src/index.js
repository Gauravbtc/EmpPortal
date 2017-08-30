import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';
import '../node_modules/react-fontawesome';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducer from './reducers/index_reducers';

const store = createStore(reducer)

ReactDOM.render(
<Provider store={store}>
  <Router>
    <App />
  </Router>
</Provider>,document.getElementById('root'));
registerServiceWorker();
