import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {BrowserRouter} from 'react-router-dom';
import {Provider} from 'react-redux';
import burgerBuilderRed from './store/reducers/BurgerBuilder';
import { createStore,applyMiddleware,compose,combineReducers

} from 'redux';
import orderReducer from './store/reducers/order'
import thunk from "redux-thunk";
import authreducer from './store/reducers/auth';


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const rootReducer = combineReducers({
    burgerBuilder:burgerBuilderRed,
    order:orderReducer,
    auth:authreducer
})
const store = createStore(rootReducer,composeEnhancers(applyMiddleware(thunk)));

const app=(
    <Provider store={store} >
        <BrowserRouter><App/></BrowserRouter>
    </Provider>

);

ReactDOM.render(
  app,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
