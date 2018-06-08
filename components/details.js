import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';

export default class DetailsScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>Drawn from scenes of Falon's childhood in France, the novels tease out what it means to adopt an adult thought-paradigm. The Unwelcome Portal and its sequel, the Waker, trace the child protagonist Ada as she comes easily to terms with the alternate world festering in plain sight. It’s a coming-of-age novel in the most terrifying sense, filled with hollowed eyes, glowing figures, and nonsensical adults.</Text>
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