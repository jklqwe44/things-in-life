import React from "react";
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import ReactDOM from "react-dom";
import Main from "./components/Main";
import reducer from "./reducers";

const store = createStore(reducer);

const wrapper = document.getElementById("container");
wrapper ? ReactDOM.render(
    <Provider store={store}><Main /></Provider>, wrapper) : false;