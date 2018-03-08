import React, { Component } from "react";
import ReactNative, { AsyncStorage, View } from "react-native";

const AUTH_TOKEN_KEY = "authtoken";
let authtoken = "";


async function setAuthToken(token) {
  authToken = `Bearer ${token}`;
  if (AsyncStorage) {
    try {
      await AsyncStorage.setItem(AUTH_TOKEN_KEY, authToken);
    } catch (error) {
      console.log("AsyncStorage error: " + error.message);
    }
  }
}

async function clearAuthToken() {
  authToken = "";
  if (AsyncStorage) {
    try {
      await AsyncStorage.setItem.removeItem(AUTH_TOKEN_KEY);
    } catch (error) {
      console.log("AsyncStorage error: " + error.message);
    }
  }
}

async function populateAuthToken() {
  if (AsyncStorage) {
    try {
      let token = await AsyncStorage.getItem(AUTH_TOKEN_KEY);
      if (token && token !== null) {
        authToken = token;
      }
    } catch (error) {
      console.log("AsyncStorage error: " + error.message);
    }
  }
}
async function makeFetch(url, info) {
  return await fetch(url, info);
}

async function json(url, method = "GET", payload = {}) {
  let data = {
    method,
    body: JSON.stringify(payload),
    headers: new Headers({
      "Content-Type": "application/json",
      "Authorization": authToken
    })
  };

  if (method === "GET") {   //so our GET req don't have a body
    delete data.body;
  }

  return await makeFetch(url, data).then(response => {
    if (response.ok) {
      let contentType = await response.headers.get("Content-Type");

      if (contentType.indexOf("application/json") > -1) {
        return response.json();
      }

      return response.statusText;
    }

    throw response;
  });
}

async function get(url) {
  return await json(url);
}

async function post(url, payload) {
  return await json(url, "POST", payload);
}

async function put(url, payload) {
  return await json(url, "PUT", payload);
}

async function destroy(url, payload) {
  return await json(url, "DELETE", payload);
}
export {
    setAuthToken,
    populateAuthToken,
    clearAuthToken,
    get,
    post,
    put,
    destroy,
    makeFetch
};