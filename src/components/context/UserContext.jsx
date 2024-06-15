// context/AuthContext.js or context/user_context.js (wherever you define your context)
import React, { createContext, useReducer, useEffect } from 'react';

const UserContext = createContext();

const initialState = JSON.parse(localStorage.getItem('user')) || false;

const reducer = (state, action) => {
    switch (action.type) {
        case 'LOGIN':
            return true;
        case 'LOGOUT':
            return false;
        default:
            return state;
    }
};

const UserProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState);

    useEffect(() => {
        localStorage.setItem('user', JSON.stringify(state));
    }, [state]);

    return (
        <UserContext.Provider value={{ state, dispatch }}>
            {children}
        </UserContext.Provider>
    );
};

export { UserContext, UserProvider };
