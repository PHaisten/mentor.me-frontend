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
	Button,
	ImageBackground
} from 'react-native';
import { Item, Icon } from 'native-base';

export default class LoginScreen extends Component {
	constructor(props) {
		super(props);
		this.state = {
			//redirectToReferrer: false,
			email: '',
			password: '',
			loggedIn: false
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
			<ImageBackground
				style={{
					width: '100%',
					height: '100%'
				}}
				blurRadius={6}
				source={require('../src/images/background.jpg')}
			>
				<KeyboardAvoidingView
					behavior="padding"
					style={styles.container1}
					keyboardVerticalOffset={45}
				>
					<View style={styles.container1}>
						<Text style={styles.text}>mentor.me</Text>
					</View>
					<View style={styles.container2}>
						<TextInput
							placeholder="Email"
							style={styles.input}
							returnKeyType="next"
							onSubmitEditing={() => this.password.focus()}
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
						<TouchableOpacity
							style={styles.button}
							onPress={() => {
								this.login();
							}}
						>
							<Text style={styles.buttonText}>LOGIN</Text>
						</TouchableOpacity>
					</View>
				</KeyboardAvoidingView>
			</ImageBackground>
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
		alignContent: 'center'
		// shadowOpacity: 0.5
	},
	container2: {
		padding: 10,
		alignContent: 'center',
		backgroundColor: 'rgba(52, 52, 52, 0.375)',
		marginBottom: 20
	},
	text: {
		textAlign: 'center',
		color: '#4F7ECC',
		fontSize: 55,
		fontWeight: 'bold',
		fontFamily: 'Damascus',
		marginTop: 30
	},
	button: {
		backgroundColor: '#4F7ECC',
		paddingVertical: 10,
		marginBottom: 5
	},
	buttonText: {
		textAlign: 'center',
		padding: 2,
		fontWeight: 'bold',
		fontSize: 18,
		color: 'white'
	},
	smallText: {
		justifyContent: 'center',
		color: 'white'
	}
});
