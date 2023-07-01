import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {store} from './Redux/Store'
import {persistStore} from 'redux-persist'
import {PersistGate} from 'redux-persist/integration/react'
import {Provider} from 'react-redux'
import { SocketProvider } from './Context/SocketProvider';



const root = ReactDOM.createRoot(document.getElementById('root'));
let persistor = persistStore(store)
root.render(
  <React.StrictMode>
  <SocketProvider>
   <Provider store={store}>
    <PersistGate persistor={persistor} ></PersistGate>
    <App />
  </Provider>
  </SocketProvider>
  </React.StrictMode>
);

