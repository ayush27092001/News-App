import { all, fork } from "redux-saga/effects";
import { news } from "./news.saga";
import { user } from "./user.saga";

export function* root() {
    yield all([
        fork(news),
        fork(user)

    ])
}