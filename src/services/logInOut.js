import * as baseService from './base';

let loggedIn = false;

function isLoggedIn() { //async/await?
    return loggedIn;
}

function checkLogin() {     //async/await?
    if (loggedIn) {
        return Promise.resolve(true);
    } else {
        baseService.populateAuthToken();
        return me()
        .then((user) => {
            loggedIn = true;
            return Promise.resolve(true);
        }).catch(() => {
            return Promise.resolve(false);
        });
    }
}

function login(email, password) {       //async/await?
    return baseService.makeFetch('/api/auth/login', {
        method: 'POST',
        body: JSON.stringify({ email, password }),
        headers: new Headers({
            'Content-Type': 'application/json'
        })
    })
    .then((response) => {
        if (response.ok) {
            return response.json()
            .then((jsonResponse) => {
                baseService.setAuthToken(jsonResponse.token);
                loggedIn = true;
            });
        } else if (response.status === 401) {
            return response.json()
            .then((jsonResponse) => {
                throw jsonResponse;
            });
        }
    });
}

async function logout() {
    await baseService.clearAuthToken();
    loggedIn = false;
}

async function me() {
    return await baseService.get('/api/users/me');
}

export { isLoggedIn, checkLogin, login, logout };
