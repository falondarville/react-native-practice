import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';

export default class DetailsScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>Drawn from scenes of Falon Darville's childhood in France, The Unwelcome Portal novels tease out what it means to adopt an adult thought-paradigm. The first book and its sequel, The Waker, trace the child protagonist Ada as she comes easily to terms with the alternate world festering in plain sight. It’s a coming-of-age novel in the most terrifying sense, filled with hollowed eyes, glowing figures, and nonsensical adults.</Text>
        <Text style={styles.text}>
        	The novels move you through worlds of dreams, tactical transformation, and natural environments. Ada meets an old man who keeps staring at a wall, a boy who can move sand, and a glowing girl. They all have something in common with eachother...and with Ada. 
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
  	fontSize: 18,
  	padding: 20
  }
});