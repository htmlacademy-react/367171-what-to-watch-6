import React from 'react';
import ReactDOM from 'react-dom';
import App from "./components/app/app";
import promoMovie from "./mocks/promo-movie";
import {createStore} from "redux";
import {reducer} from "./store/reducer";
import {Provider} from "react-redux";

const store = createStore(reducer);

ReactDOM.render(
  <Provider store={store}>
    <App promoMovie={promoMovie}/>
  </Provider>,
    document.querySelector(`#root`)
);
