import React from 'react';
import ReactDOM from 'react-dom';
import App from "./components/app/app";
import promoMovie from "./mocks/promo-movie";
import {Provider} from "react-redux";
import store from "./store/store";

ReactDOM.render(
    <Provider store={store}>
      <App promoMovie={promoMovie}/>
    </Provider>,
    document.querySelector(`#root`)
);
