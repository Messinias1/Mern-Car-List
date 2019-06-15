import React, { Component } from 'react';
import AppNavbar from './components/AppNavbar'
import CarList from './components/CarList'
import CarModal from './components/carModal'

import { Provider } from 'react-redux'
import store from './store'

import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
      <div className="App">
        <AppNavbar />
        <CarModal />
        <CarList />
      </div>
      </Provider>
    )
  }
}

export default App;
