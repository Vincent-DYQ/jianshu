import React, { Component, Fragment } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Route } from 'react-router-dom'
import store from './store';
import Header from './common/header/index';
import Home from './pages/home';
import Detail from './pages/detail/loadable.js';
import Login from './pages/login/loadable.js';
import Write from './pages/write/loadable.js';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
          <BrowserRouter>
            <Fragment>
              <Header /> 
              <Route path='/' exact component={Home}></Route>
              <Route path='/login' exact component={Login}></Route>
              <Route path='/write' exact component={Write}></Route>
              <Route path='/detail/:id' exact component={Detail}></Route>
            </Fragment>
          </BrowserRouter>
      </Provider>  
    );
  }
}

export default App;
