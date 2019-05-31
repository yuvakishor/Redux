import React from 'react';
import './App.css';
import Routing from './Routing/Routing'
import store from './store'
import {Provider} from 'react-redux'


function App() {
  store.subscribe(()=>{
    console.log("store.getState()1111",store.getState())
  })
  console.log("store.getState()",store.getState())
  return (
    <Provider store={store}>
      <React.Fragment>
        <Routing />
      </React.Fragment>
    </Provider>
  );
}

export default App;
