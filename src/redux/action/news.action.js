import { ADD_LIKED_NEWS_ERROR, ADD_LIKED_NEWS_START, ADD_LIKED_NEWS_SUCCESS, GET_ALL_NEWS_ERROR, GET_ALL_NEWS_START, GET_ALL_NEWS_SUCCESS, GET_CATEGORY_NEWS_ERROR, GET_CATEGORY_NEWS_START, GET_CATEGORY_NEWS_SUCCESS, GET_LIKED_NEWS_ERROR, GET_LIKED_NEWS_START, GET_LIKED_NEWS_SUCCESS } from "../constant/news.constant"



export const getAllNewsStart = () => ({
    type: GET_ALL_NEWS_START
})

export const getAllNewsSuccess = (data) => ({
    type: GET_ALL_NEWS_SUCCESS,
    payload: data
})

export const getAllNewsError = (error) => ({
    type: GET_ALL_NEWS_ERROR,
    payload: error
})


export const getCategoryNewsStart = (id) => ({
    type: GET_CATEGORY_NEWS_START,
    payload: id
})

export const getCategoryNewsSuccess = (data) => ({
    type: GET_CATEGORY_NEWS_SUCCESS,
    payload: data
})

export const getCategoryNewsError = (error) => ({
    type: GET_CATEGORY_NEWS_ERROR,
    payload: error
})


export const addlikedNewsStart = (news) => ({
    type: ADD_LIKED_NEWS_START,
    payload: news
})

export const addlikedNewsSuccess = (data) => ({
   
    type: ADD_LIKED_NEWS_SUCCESS,
    payload: data
})

export const addlikedNewsError = (error) => ({
    type: ADD_LIKED_NEWS_ERROR,
    payload: error
})


export const getLikedNewsStart = (data) => ({
    type: GET_LIKED_NEWS_START,
  payload: data
})

export const getLikedNewsSuccess = (data) => ({
    type: GET_LIKED_NEWS_SUCCESS,
    payload: data
})

export const getLikedNewsError = (error) => ({
    type: GET_LIKED_NEWS_ERROR,
    payload: error
})

