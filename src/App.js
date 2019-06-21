import React from 'react';
import Main from './components/Main';
import { Provider } from "react-redux";
import store from "../src/redux/store";

import { addStudent } from "../src/redux/actions";
window.store = store;
window.addStudent = addStudent;

function App() {
  return (
    <Provider store={store}>
      <Main />
    </Provider>
  );
}

export default App;
