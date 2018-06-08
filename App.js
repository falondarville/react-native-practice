import React, { Component } from 'react';
import { StyleSheet, Text, View, Button, Image } from 'react-native';
import { createStackNavigator, navigationOptions } from 'react-navigation';
import SignupScreen from './components/sign-up.js';
import DetailsScreen from './components/details.js';

// if you want to push unique information to each new screen, use push instead of navigate
// the header provided with include a back button by default if there is something to go back to. But you can also programmatically add this functionality by adding this.props.navigation.goBack()
// to go back to the home page from many pages deep, navigate to home or use navigation.popToTop()
// you can pass information to routes using parameters in two ways. 
// Pass the params to a route as the second parameter to the navigation function in the following way:   this.props.navigation.navigate('RouteName', { /* params go here */ })
// navigate function or grab the param from the screen component like so: this.props.navigation.getParam(paramName, defaultValue)
// yes you can directly access the params object with this.props.navigation.state.params, but use one of the other two methods to account for the possibility of null
// to use params in the title, make navigationOptions into a function. Props won't work here because this is not available
class HomeScreen extends React.Component {
  static navigationOptions = {
    title: "The Unwelcome Portal"
  };
  render() {
    return (
      <View style={styles.container}>
        <Image source={{uri: 'https://falondarville.com/wp-content/themes/falon-darville/assets/images/3.png'}} style={{ width: 300, height: 300 }}/>
        <Button title="Read the Synopsis" onPress={() => this.props.navigation.navigate('Details')} />
        <Button title="Sign up now" onPress={() => this.props.navigation.navigate('Signup')} />
      </View>
  );
}
}

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
        backgroundColor: "#134E5E"
      },
      headerTintColor: "white",
      headerTitleStyle: {
        fontWeight: "bold"
      },
    },
  }
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default class App extends React.Component {
  render() {
    return <RootStack />;
  }
}
