import ReactDOM from 'react-dom';
import React from 'react';
import { AppContainer } from 'react-hot-loader';
import { Provider } from 'react-redux';

import { configureStore } from './redux';

import '@utils/global.scss';
import 'antd/dist/antd.css';
import Routes from './routes';

let store = configureStore();

const render = Router => {
  ReactDOM.render(
    <AppContainer warnings={false}>
      <Provider store={store}>
        <Router/>
      </Provider>
    </AppContainer>
    , document.getElementById("root"));  
}
render(Routes);
if (module.hot) {
  module.hot.accept('./routes', () => {
    const newRoutes = require('./routes').default;
    render(newRoutes);
  })
  // module.hot.accept('./redux', () => {
  //   console.log("------------------------REACT HOT MODULE(STORE)------------------------");
  //   const nextReducer = require('./redux/reducers').default;
  //   store.replaceReducer(nextReducer);
  //   const newRoutes = require('./routes/routes').default;
  //   render(newRoutes);
  // })
}