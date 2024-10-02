import { put, takeLatest } from "redux-saga/effects";
import { ADD_USER_START, DELETE_USER_START, GET_USER_START, LOGINED_USER_START, LOGOUT_USER_START, PROFILE_EDIT_USER_START, UPDATE_USER_START } from "../constant/user.constant";
import { addUserToFirebase, deleteUserFromFirebase, getUserFromFirebase, updateUserFromFirebase } from "../service/user.service";
import { addUserError, deleteUserError, getUserError, getUserStart, getUserSuccess, loginedUserError, loginedUserSuccess, logoutUserSuccess, profileEditUserError, profileEditUserSuccess, updateUserError } from "../action/user.action";


function* getUser() {
    try {
        let response = yield getUserFromFirebase()
        yield put(getUserSuccess(response))

    } catch (error) {
        yield put(getUserError(error.message))

    }

}

function* addUser({ payload }) {
    try {

        yield addUserToFirebase(payload)
        yield put(getUserStart())
    } catch (error) {
        yield addUserError(error)

    }

}

function* deleteUser({ payload }) {
    try {
        yield deleteUserFromFirebase(payload)
        yield put(getUserStart())
    } catch (error) {
        yield deleteUserError(error.message)

    }

}

function* updateUser({ payload }) {
    try {
        yield updateUserFromFirebase(payload.user, payload.id)
        yield put(getUserStart())
    } catch (error) {
        yield updateUserError(error.message)

    }

}

function* loginedUser({ payload }) {
    try {


        yield put(loginedUserSuccess(payload))
    } catch (error) {
        yield loginedUserError(error.message)

    }

}



function* profileEditUser({ payload }) {
    try {
 console.log(payload.user,payload.id);
       yield updateUserFromFirebase(payload.user, payload.id)
       yield put(getUserStart())
       yield put(profileEditUserSuccess(payload.user))
 
    } catch (error) {
       yield put(profileEditUserError(error.message))
          console.log(error.message);
    }
 }

 function* logoutUser() {
    try {
 
       yield put(logoutUserSuccess())
 
    } catch (error) {
       yield put(loginedUserError(error.message))
    }
 }
 
export function* user() {
    yield takeLatest(GET_USER_START, getUser)
    yield takeLatest(ADD_USER_START, addUser)
    yield takeLatest(DELETE_USER_START, deleteUser)
    yield takeLatest(UPDATE_USER_START, updateUser)
    yield takeLatest(LOGINED_USER_START, loginedUser)
    yield takeLatest(PROFILE_EDIT_USER_START, profileEditUser)
    yield takeLatest(PROFILE_EDIT_USER_START, profileEditUser)
    yield takeLatest(LOGOUT_USER_START, logoutUser)
}