import * as service from './base';
import React from 'react';

let loggedIn = false;

function isLoggedIn() {
	//async/await?
	return loggedIn;
}

function checkLogin() {
	//async/await?
	if (loggedIn) {
		return Promise.resolve(true);
	} else {
		service.populateAuthToken();
		return me() //checks a protected route to see if token is valid; route runs through our middleware
			.then(user => {
				loggedIn = true;
				return Promise.resolve(true);
			})
			.catch(() => {
				return Promise.resolve(false);
			});
	}
}

function login(email, password) {
	//async/await?
	return service
		.makeFetch('/api/auth/login', {
			method: 'POST',
			body: JSON.stringify({ email, password }),
			headers: new Headers({
				'Content-Type': 'application/json'
			})
		})
		.then(response => {
			if (response.ok) {
				return response.json().then(jsonResponse => {
					service.setAuthToken(jsonResponse.token);
					loggedIn = true;
				});
			} else if (response.status === 401) {
				return response.json().then(jsonResponse => {
					throw jsonResponse;
				});
			}
		});
}

async function logout() {
	await service.clearAuthToken();
	loggedIn = false;
}

async function me() {
	return await service.get('/api/users/me'); //a protected route
}

export { isLoggedIn, checkLogin, login, logout };
