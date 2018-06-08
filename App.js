import React, { Component } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { createStackNavigator, navigationOptions } from 'react-navigation';
import SignupScreen from './components/sign-up.js';

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
    title: "Falon's App"
  };
  render() {
    return (
      <View style={styles.container}>
        <Text>Welcome to my app!</Text>
        <Button title="Go to details" onPress={() => this.props.navigation.navigate('Details')} />
        <Button title="Sign up now" onPress={() => this.props.navigation.navigate('Signup')} />
      </View>
  );
}
}

class DetailsScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>This is the detail page!</Text>
        <Button title="Go home" onPress={() => this.props.navigation.navigate('Home')}/>
        <Button title="Go Back" onPress={() => this.props.navigation.goBack()}/>
      </View>
    );
  }
}

class ModalScreen extends React.Component {
  render() {
    return (
      <View>
        <Text>I'm a real role modal</Text>
        <Button
          onPress={() => this.props.navigation.goBack()}
          title="Dismiss"
        />
      </View>
    )
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
