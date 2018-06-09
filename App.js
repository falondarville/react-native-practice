import React, { Component } from 'react';
import { createStackNavigator, navigationOptions } from 'react-navigation';
import SignupScreen from './components/sign-up.js';
import DetailsScreen from './components/details.js';
import HomeScreen from './components/home.js';

const RootStack = createStackNavigator(
  {
    Home: HomeScreen,
    Details: DetailsScreen,
    Signup: SignupScreen
  },
  {
    initialRouteName: 'Home',
    navigationOptions: {
      headerStyle: {
        backgroundColor: "#fff"
      },
      headerTintColor: "black",
      headerTitleStyle: {
        fontWeight: "bold"
      },
    },
  }
);

export default class App extends React.Component {
  render() {
    return <RootStack />;
  }
}
