import App from './components/App.jsx';
import { Provider } from "react-redux";
import ReactDOM from 'react-dom';
import React from 'react';
// import store from "./store/store";

ReactDOM.render(
    <Provider>
        <App />
    </Provider>, 
    document.getElementById('App'))