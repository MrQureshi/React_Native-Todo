import React, { Component } from 'react';
import Login from './src/components/Login'
import store from './src/store';
import {Provider} from 'react-redux'
import { createStackNavigator,createAppContainer } from 'react-navigation';
import Dashboard from './src/components/Dashboard'

const AppStackNavigator = createStackNavigator({
  Login: Login,
  Dashboard:Dashboard
}, { headerMode: "none" })
const AppContainer = createAppContainer(AppStackNavigator)

class App extends Component {

  render() {
    return (
      <Provider store={store}>
        <AppContainer/>
      </Provider>
    )
  }
}

export default App

console.disableYellowBox= true