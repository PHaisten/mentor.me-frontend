import React, { Component } from 'react';
import * as loginService from '../src/services/logInOut';
import {
	ScrollView,
	TextInput,
	View,
	Text,
	StyleSheet,
	TouchableOpacity,
	KeyboardAvoidingView,
	TouchableHighlight,
	Button
} from 'react-native';
import { Item, Icon } from 'native-base';

export default class LoginScreen extends Component {
	constructor(props) {
		super(props);
		this.state = {
			//redirectToReferrer: false,
			email: '',
			password: ''
			//feedbackMessage: '',
			//checkingLogin: true
		};
	}

	// componentDidMount() {
	//     loginService.checkLogin()
	//     .then((loggedIn) => {
	//         if (loggedIn) {
	// 			//{() => {this.props.screenProps.handleChoice('homementee')}}
	//             this.setState(
	// 				{ redirectToReferrer: true, checkingLogin: false }
	// 			);
	//         } else {
	//             this.setState(
	// 				{ checkingLogin: false }
	// 			);
	//          }
	//     });
	// }

	login() {
		loginService
			.login(this.state.email, this.state.password)
			.then(() => {
				this.setState({ redirectToReferrer: true });
			})
			.catch(err => {
				if (err.message) {
					this.setState({ feedbackMessage: err.message });
				}
			});
		this.props.screenProps.handleChoice('homementee');
	}

	handleEmailChange(value) {
		this.setState({ email: value });
	}
	handlePasswordChange(value) {
		this.setState({ password: value });
	}
	//userType(userid){  if (mentee) then -> 'metees'; else--> 'mentors
	//...await onPress={() => {this.props.screenProps.handleChoice('homementee')}}

	render() {
		const { navigate } = this.props.navigation;

		return (
			<KeyboardAvoidingView
				behavior="padding"
				style={styles.container1}
				keyboardVerticalOffset={65}
			>
				<View style={styles.container1}>
					<Text style={styles.text}>Mentor.Me</Text>
				</View>
				<View style={styles.container2}>
					<TextInput
						placeholder="Email"
						style={styles.input}
						returnKeyType="next"
						onSubmitEditing={() => this.passwordInput.focus()}
						keyboardType="email-address"
						ref={el => {
							this.email = el;
						}}
						onChangeText={email => {
							this.setState({ email });
							console.log(this.state);
						}}
					/>
					<TextInput
						placeholder="Password"
						style={styles.input}
						secureTextEntry
						returnKeyType="go"
						ref={el => {
							this.password = el;
						}}
						onChangeText={password => {
							this.setState({ password });
							console.log(this.state);
						}}
					/>
					<Button
						onPress={() => navigate('CreateAccountLand', { name: 'Account' })}
						title="New here? Create an Account"
					/>
				</View>
				<TouchableOpacity
					style={styles.button}
					onPress={() => {
						this.login();
					}}
				>
					<Text style={styles.buttonText}>LOGIN</Text>
				</TouchableOpacity>
			</KeyboardAvoidingView>
		);
	}
}

const styles = StyleSheet.create({
	input: {
		height: 40,
		marginBottom: 10,
		paddingLeft: 10,
		paddingRight: 10,
		backgroundColor: 'white'
	},
	container1: {
		flex: 1,
		padding: 15,
		alignContent: 'center',
		backgroundColor: '#00BCD4'
	},
	container2: {
		padding: 10,
		alignContent: 'center'
	},
	text: {
		textAlign: 'center',
		color: '#FFF',
		fontSize: 50,
		fontWeight: 'bold',
		fontFamily: 'Verdana',
		marginTop: 30
	},
	button: {
		backgroundColor: '#B2EBF2',
		paddingVertical: 10,
		marginBottom: 10
	},
	buttonText: {
		textAlign: 'center',
		padding: 2,
		fontWeight: 'bold',
		fontSize: 18
	},
	smallText: {
		justifyContent: 'center',
		color: 'white'
	}
});
