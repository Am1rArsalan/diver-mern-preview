import { createStore, combineReducers, compose, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';

//import transActionsReducer from './reducers/transActionsReducer' ;
import authReducer from './reducers/authReducer' ;
import userReducer from './reducers/userReducer' ;
import rootSaga from './sagas/index'
import { reducer as  formReducer   } from 'redux-form' ;


const rootReducer = combineReducers({
   //transActions : transActionsReducer,
   auth:authReducer ,
   user : userReducer  ,
   form : formReducer
});

const configureStore = (initState) => {
    const sagaMiddleware = createSagaMiddleware();

    const composeEnhaunster = process.env.NODE_ENV === 'development' ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ : null || compose;

    const store = createStore(rootReducer, initState , composeEnhaunster(applyMiddleware(sagaMiddleware)));

    sagaMiddleware.run(rootSaga)

    return store  ;
}



export default configureStore;
