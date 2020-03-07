import React from 'react';
import './App.css';

import { Provider } from 'react-redux'
import strore from './Store'

import Header from './components/Header/Header';
import Body from './components/Body/Body'

function App() {
  return (
    <div className="App">
      <Header />
      <Provider store={strore}>
        <Body />
      </Provider>
    </div>
  );
}

export default App;
