import { ADD_LIKED_NEWS_SUCCESS, GET_ALL_NEWS_SUCCESS, GET_CATEGORY_NEWS_SUCCESS, GET_LIKED_NEWS_SUCCESS, LIKED_NEWS_SUCCESS } from "../constant/news.constant";

const initialState = {
    news: [],
    categoryNews: [],
    categories: [
        "war",
        "government",
        "politics",
        "education",
        "health",
        "environment",
        "economy",
        "business",
        "fashion",
        "entertainment",
        "sport"
    ],
    likedNews: localStorage.getItem('likedNews') ? JSON.parse(
        localStorage.getItem('likedNews')) : []
}

export const NewsReducer = (state = initialState, action) => {

    switch (action.type) {
        case GET_ALL_NEWS_SUCCESS:

            return {
                ...state,
                news: [...action.payload]
            }
        case GET_CATEGORY_NEWS_SUCCESS:

            return {
                ...state,
                categoryNews: [...action.payload]
            }

        case GET_LIKED_NEWS_SUCCESS:
            localStorage.getItem('likedNews', JSON.stringify(action.payload))

            return {
                ...state,
                likedNews: [action.payload]
            }
        
        case ADD_LIKED_NEWS_SUCCESS:
            console.log(action.payload);
            localStorage.setItem('likedNews', JSON.stringify(action.payload))

            return {
                ...state,
                likedNews: [...action.payload]
            }
        


        default:
            return state;
    }
}