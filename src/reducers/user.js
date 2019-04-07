const user = (state = {userType: 'notLogin'}, action) => {
    switch (action.type) {
        case "CHANGE_USER_TYPE":
        return {
            ...state,
            userType: action.userType
        }
        default:
        return state;
    }
};
export default user;