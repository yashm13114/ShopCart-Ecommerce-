// // context/AuthContext.js or context/user_context.js (wherever you define your context)
// import React, { createContext, useReducer, useEffect } from 'react';

// const UserContext = createContext();

// const initialState = JSON.parse(localStorage.getItem('user')) || false;

// const reducer = (state, action) => {
//     switch (action.type) {
//         case 'LOGIN':
//             return true;
//         case 'LOGOUT':
//             return false;
//         default:
//             return state;
//     }
// };

// const UserProvider = ({ children }) => {
//     const [state, dispatch] = useReducer(reducer, initialState);

//     // useEffect(() => {
//     //     localStorage.setItem('user');
//     // }, []);

//     return (
//         <UserContext.Provider value={{ state, dispatch }}>
//             {children}
//         </UserContext.Provider>
//     );
// };

// export { UserContext, UserProvider };
// context/AuthContext.js or context/user_context.js (wherever you define your context)
import React, { createContext, useReducer } from 'react';

const UserContext = createContext();

const initialState = JSON.parse(localStorage.getItem('user')) || false;

const reducer = (state, action) => {
    switch (action.type) {
        case 'LOGIN':
            return action.payload; // Assuming action.payload is the entire user data object
        case 'LOGOUT':
            localStorage.removeItem('user');
            return false;
        default:
            return state;
    }
};

const UserProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState);

    return (
        <UserContext.Provider value={{ state, dispatch }}>
            {children}
        </UserContext.Provider>
    );
};

export { UserContext, UserProvider };
