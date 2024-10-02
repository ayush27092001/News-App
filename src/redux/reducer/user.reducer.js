import {  GET_USER_SUCCESS, LOGINED_USER_SUCCESS, LOGOUT_USER_SUCCESS, PROFILE_EDIT_USER_SUCCESS } from "../constant/user.constant";

const initialState = {
    users: localStorage.getItem('users') ? JSON.parse(
        localStorage.getItem('users')) : [],
    loginedUser: localStorage.getItem('loginedUser') ? JSON.parse(
        localStorage.getItem('loginedUser')) : {},

}

export const UserReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_USER_SUCCESS:

            localStorage.setItem('users', JSON.stringify(action.payload))
            return {
                ...state,
                users: [...action.payload]
            }


        case LOGINED_USER_SUCCESS:
            console.log(action.payload);
            localStorage.setItem('loginedUser', JSON.stringify(action.payload))

            return {
                ...state,
                loginedUser: { ...action.payload }
            }
            case PROFILE_EDIT_USER_SUCCESS:
                console.log(action.payload);
                localStorage.setItem('loginedUser', JSON.stringify(action.payload))
                return {
                    ...state,
                    loginedUser: { ...action.payload }
                }

            case LOGOUT_USER_SUCCESS:
                console.log(action.payload);
                localStorage.removeItem('loginedUser')
                return {
                    ...state,
                    loginedUser: {  }
                }


        default:
            return state;
    }
}