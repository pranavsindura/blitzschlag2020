import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from 'react-redux';
import {createStore, combineReducers, applyMiddleware} from 'redux';
import reducer from './store/reducer';

const logAction = (store)=>{
    return (next) => {
        return (action)=> {
            console.log('Dispatching: '+JSON.stringify(action));
            const result = next(action);
            console.log('New State: ' + JSON.stringify(store.getState()))
            return result;
        }
    }
}

let store = createStore(reducer, applyMiddleware(logAction));

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
