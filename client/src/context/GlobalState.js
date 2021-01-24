import { createContext, useReducer } from "react";
import AppReducer from "./AppReducer"
const initialState = {
    newUserData: [],
    isAuthenticated: false
};
export const GlobalContext = createContext(initialState);

// provider
export const tokenConfig = () => {
    // Get token from localStorage
    const token = localStorage.getItem('token');
    // Header
    const config = {
        headers: {
            "Content-type": "application/json",
        }
    }
    if (token) {
        config.headers['x-auth-token'] = token;
    }
    return config;
}
export const GlobalProvider = ({ children }) => {
    const [state, dispatch] = useReducer(AppReducer, initialState);
    const addUser = (user) => {
        fetch("/api/users", {
            method: "POST",
            body: JSON.stringify({
                name: user.name,
                email_number: user.email_number,
                password: user.password,
                birth_date: user.birth_date,
                gender: user.gender,
            }),
            headers: {
                "Content-type": "application/json",
            }
        })
            .then(response => response.json())
            .then(user => dispatch({
                type: "REGISTER_SUCCESS",
                payload: user
            }));
    }
    return (

        <GlobalContext.Provider value={{
            newUser: state.newUserData,
            addUser
        }}>
            {children}
        </GlobalContext.Provider>
    )
}