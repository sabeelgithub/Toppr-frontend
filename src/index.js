import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {store} from './Redux/Store'
import {persistStore} from 'redux-persist'
import {PersistGate} from 'redux-persist/integration/react'
import {Provider} from 'react-redux'



const root = ReactDOM.createRoot(document.getElementById('root'));
let persistor = persistStore(store)
root.render(
  <React.StrictMode>
   <Provider store={store}>
    <PersistGate persistor={persistor} ></PersistGate>
    <App />
  </Provider>
    
  </React.StrictMode>
);

