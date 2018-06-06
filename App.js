import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { createStackNavigator } from 'react-navigation';

// if you want to push unique information to each new screen, use push instead of navigate
class HomeScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Welcome to my app!</Text>
        <Button title="Go to details" onPress={() => this.props.navigation.navigate('Details')}/>
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
      </View>
    );
  }
}

const RootStack = createStackNavigator(
  {
    Home: HomeScreen,
    Details: DetailsScreen
  },
  {
    initialRouteName: 'Home'
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
