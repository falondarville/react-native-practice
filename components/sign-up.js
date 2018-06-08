import React, { Component } from 'react';
import { Text, View, Button, StyleSheet } from 'react-native';
import t from 'tcomb-form-native';

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
				<Button 
				title="Sign Up Now"
				onPress={this.handleSubmit}
				/>
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
  }
});