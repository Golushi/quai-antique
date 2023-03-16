import React from "react";
import { createStore } from "react-redux";

const LOGIN = "AUTH/LOGIN";
const LOGOUT = "AUTH/LOGOUT";

const defaultState = {
  authentificated: false,
};

const reducerAuthentification = (state = defaultState, action) => {
  switch (action.type) {
    case LOGIN: {
      return {
        authentificated: true,
      };
    }
    case LOGOUT: {
      return {
        authentificated: false,
      };
    }
    default:
      return state;
  }
};

// Store
const store = createStore(reducerAuthentification);

// Obtenir le State du store
const currentState = store.getState();

// Action creator

const loginUser = () => {
  return {
    type: LOGIN,
  };
};

const logoutUser = () => {
  return {
    type: LOGOUT,
  };
};

// Dispatch vers le Store
store.dispatch(loginUser());

export default function ReduxTest() {
  return <div>ReduxTest</div>;
}
