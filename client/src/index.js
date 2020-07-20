import React from 'react' ;
import ReactDOM from 'react-dom' ;
//import './index.scss';
import App from './App' ;


import { Provider } from 'react-redux';
import configureStore from './store/configureStore';
import { BrowserRouter } from 'react-router-dom';

//store (redux stroe)
const store = configureStore();



function ReduxWrappedApp() {
  return (
    <Provider store={store}>
      <BrowserRouter basename='/admin'>
        <App />
      </BrowserRouter>
    </Provider>
  )
}




ReactDOM.render(
  <ReduxWrappedApp/>
  , document.getElementById('root'));





