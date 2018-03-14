import React, { Component } from 'react';
import { Text, Button } from 'native-base';
import { AsyncStorage, AlertIOS, View } from 'react-native';

export default class Logout extends Component {
	constructor(props) {
        super(props); 
        this.state = {
            loggedIn: true
        }
    }

    componentDidMount() {
        return this.logOut()
    }

    logOut() {
        AlertIOS.alert("Are you sure you want to logout?", "y u want 2 leave me?", [
            {text: 'Cancel', onPress: () => {this.props.screenProps.handleChoice('')}, 
                style: 'cancel'},
            {text: 'Logout', onPress: () => {
                AsyncStorage.clear();
                this.setState( { loggedIn: false })
                this.props.screenProps.handleChoice('');
            }}
        ])
    }

    render() {
        return (<View />)
    }
};