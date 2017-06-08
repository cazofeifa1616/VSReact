// import 'babel-polyfill'
import React from 'react';
import { render } from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import configureStore from './store/configureStore';
import App from './containers/App';
import { Provider } from 'react-redux'
import { BrowserRouter as Router } from 'react-router-dom'
import { Route } from 'react-router-dom'
import Login from './pages/login'

const store = configureStore();

render(
    <Provider store={store}>
        <Router>
            <Route path="/" component={Login} />
        </Router>
    </Provider>, document.getElementById('root'))

/*
render(
  <AppContainer>
    <App store={store} />
  </AppContainer>,
  document.getElementById('root')
);

if (module.hot) {
  module.hot.accept('./containers/App', () => {
    render(
      <AppContainer
        component={require('./containers/App').default}
        props={{ store }}
      />,
      document.getElementById('root')
    );
});
}
*/
