import {createStore, combineReducers, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';

import { authReducer } from '../reducers/authReducer';
import { uiReducer } from '../reducers/uiReducer';
import { sidebarReducer } from '../reducers/sidebarReducer';
//import { notesReducer } from '../reducers/notesReducer';

const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

const reducers = combineReducers({
    auth: authReducer,
    ui: uiReducer,
    sidebar: sidebarReducer
    //notes: notesReducer

})

export const store = createStore(
    reducers, 
    composeEnhancers(
        applyMiddleware( thunk )
    )  
  );