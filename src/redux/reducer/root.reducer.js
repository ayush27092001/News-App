import { combineReducers } from "@reduxjs/toolkit";
import { NewsReducer } from "./news.reducer";
import { UserReducer } from "./user.reducer";

export const RootReducer = combineReducers({
    news: NewsReducer,
    user: UserReducer
})