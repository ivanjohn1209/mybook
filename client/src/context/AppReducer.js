function AppReducer(state, action) {
    switch (action.type) {
        case "REGISTER_SUCCESS":
            localStorage.setItem('token', action.payload.token)
            return {
                ...state,
                ...action.payload,
                isAuthenticated: true,
            };
        default:
            return state;
    }
}
export default AppReducer;
