import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';
import '../node_modules/react-fontawesome';
import { createStore,applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import rootReducer from './reducers/index_reducers';
import { composeWithDevTools} from 'redux-devtools-extension';

const store = createStore(
  rootReducer,
  composeWithDevTools(
    applyMiddleware(thunk),
  )
);

ReactDOM.render(
<Provider store={store}>
  <Router>
    <App />
  </Router>
</Provider>,document.getElementById('root'));
registerServiceWorker();
