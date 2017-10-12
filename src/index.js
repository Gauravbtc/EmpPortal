import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';
import '../node_modules/react-fontawesome';
import {createStore,applyMiddleware} from 'redux';
//import {persistStore, autoRehydrate} from 'redux-persist'

import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import rootReducer from './reducers/index_reducers';
import { composeWithDevTools} from 'redux-devtools-extension';
import { authenticated } from './actions/auth_action';
import { authUser,authUserSuccess,authUserFailure } from './actions/user_action';

const user = localStorage.getItem('user');

const store = createStore(
  rootReducer,
  composeWithDevTools(
    applyMiddleware(thunk),
  )
);
//persistStore(store)

let next = store.dispatch

if(user) {
  next = store.dispatch(authUser());
  next.payload.then((response) => {
    if(!response.error && response.status === 200){
      store.dispatch(authUserSuccess(response.data));
      store.dispatch(authenticated(user));
    }
    else{
      store.dispatch(authUserFailure(response.data));
    } 
  })
  console.log(next.payload);
 }

console.log("i m in index");
ReactDOM.render(
<Provider store={store}>
  <Router>
    <App />
  </Router>
</Provider>,document.getElementById('root'));
registerServiceWorker();

// function mapStateToProps(state, ownProps){
//   return{
//     loginUser: state.user.loginUser,
//     params: ownProps
//   }
// }