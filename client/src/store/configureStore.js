
import { createStore, combineReducers, compose, applyMiddleware } from 'redux';
import rThunk from 'redux-thunk';

const reducer = combineReducers({
});

const composeEnhaunster = process.env.NODE_ENV === 'development' ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ : null || compose;

// initial State  ,

const initialState = {

}

const configureStore = (initState = initialState) => {
    return createStore(reducer, initState , composeEnhaunster(applyMiddleware(rThunk)));
}



export default configureStore;
