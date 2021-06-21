import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from "react-redux";
import { PersistGate } from 'redux-persist/integration/react'


import generateStore from "./store";

import MyNotes from './MyNotes';

const store = generateStore().store;
const persistor = generateStore().persistor;

ReactDOM.render(
  <React.StrictMode>
      <Provider store={store}>
          <PersistGate loading={null} persistor={persistor}>
            <MyNotes />
          </PersistGate>
      </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
