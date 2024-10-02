import { put, takeLatest } from "redux-saga/effects";
import { getLikedNewsFromApi, getNewsByApi, likedNewsFromApi, } from "../service/news.service";
import { ADD_LIKED_NEWS_START, GET_ALL_NEWS_START, GET_CATEGORY_NEWS_START, GET_LIKED_NEWS_ERROR, GET_LIKED_NEWS_START } from "../constant/news.constant";
import { addlikedNewsError, addlikedNewsSuccess, getAllNewsError, getAllNewsSuccess, getCategoryNewsError, getCategoryNewsSuccess, getLikedNewsError, getLikedNewsStart, getLikedNewsSuccess } from "../action/news.action";

function* getAllNews() {
    try {
        let result = yield getNewsByApi()
        yield put(getAllNewsSuccess(result))
    } catch (error) {
        yield put(getAllNewsError(error.message))
    }
}

function* getCategoryNews({ payload }) {
    try {
        let result = yield getNewsByApi(payload)
        console.log(result);
        yield put(getCategoryNewsSuccess(result))
    } catch (error) {
        yield put(getCategoryNewsError(error.message))
    }
}

function* getLikedNews() {
    try {
        let response = yield getLikedNewsFromApi()

        yield put(getLikedNewsSuccess(response))

    } catch (error) {
        yield put(getLikedNewsError(error))
    }
}

function* addLikedNews({ payload }) {
    try {
        yield likedNewsFromApi(payload)
        yield put(addlikedNewsSuccess(payload)) 
        yield getLikedNewsStart()

     

    } catch (error) {
        yield put(addlikedNewsError(error))
    }
}





export function* news() {
    yield takeLatest(GET_ALL_NEWS_START, getAllNews)
    yield takeLatest(GET_CATEGORY_NEWS_START, getCategoryNews)
    yield takeLatest(GET_LIKED_NEWS_START, getLikedNews)
    yield takeLatest(ADD_LIKED_NEWS_START, addLikedNews)
}