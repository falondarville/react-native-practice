import React, { Component } from 'react';
import { Text, View, Button, StyleSheet, TouchableHighlight } from 'react-native';
import t from 'tcomb-form-native';
import { LinearGradient } from 'expo';

const User = t.struct({
	email: t.String,
	username: t.maybe(t.String),
	password: t.String,
	terms: t.Boolean
})

const Form = t.form.Form;

const options = {
	fields: {
		terms: {
			label: 'Agree to Terms'
		},
		email: {
			error: 'Please enter a valid email.'
		},
		password: {
			error: "Passwords must be a min. of 6 characters."
		}
	}
}

export default class Signup extends React.Component {

	handleSubmit = () => {
		const value = this._form.getValue();
		console.log("Value: ", value);
	}

	render(){
		return(
			<View style={styles.container}>
				<Text style={styles.title}>Sign Up</Text>
				<Form
				ref={c => this._form = c}
				type={User} 
				options={options}
				/>

				<LinearGradient
	          colors={['#134E5E', '#71B280']}
	          style={{ padding: 8, alignItems: 'center', borderRadius: 5 }}
	          start={[ 0.3, 0.2 ]}>				
				<TouchableHighlight style={styles.button} onPress={this.handleSubmit}>
					<Text style={styles.buttonText}>Let's Go</Text>
				</TouchableHighlight>
				</LinearGradient>
			</View>
		);
	}
}

const styles = StyleSheet.create({
  container: {
  	flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    padding: 10
  },
  title: {
  	alignSelf: 'center',
  	justifyContent: 'center',
  	padding: 5,
  	fontSize: 30
  },
  buttonText: {
    fontSize: 18,
    color: 'white',
    alignSelf: 'center'
  },
  button: {
    height: 28,
    borderRadius: 5,
    marginBottom: 10,
    alignSelf: 'stretch',
    justifyContent: 'center'
  }
});