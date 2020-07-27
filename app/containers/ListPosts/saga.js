import { call, put, select, takeLatest } from 'redux-saga/effects';
import axios from "axios";

import { FETCH_LISTPOSTS, ADD_LISTPOSTS, DELETE_LISTPOSTS } from './constants';
import { actGetListPostSuccess, actGetListPostFail } from './actions';
import { makeGetItem, makeSelectPosts, makeSelectIndex } from './selectors';
import { reqListPosts } from '../../utils/request';


export function* getListPosts() {
    const requestUrl = `https://jsonplaceholder.typicode.com/posts`
    try {
        const repos = yield call(reqListPosts, requestUrl);
        yield put(actGetListPostSuccess(repos));
    } catch (err) {
        yield put(actGetListPostFail(err));
    }
}

export function* addItemPost() {
    const item = yield select(makeGetItem());
    const posts = yield select(makeSelectPosts());
    const requestURL = `https://jsonplaceholder.typicode.com/posts`;
    try {
        const repos = yield call(() => axios.post(requestURL, item));
        posts.push(repos.data)
        yield put(actGetListPostSuccess(posts));
    } catch (err) {
        yield put(actGetListPostFail(err));
    }
}

export function* deleteItemPost() {
    const item = yield select(makeGetItem());
    const posts = yield select(makeSelectPosts());
    const index = yield select(makeSelectIndex())
    const requestURL = `https://jsonplaceholder.typicode.com/posts/${item.id}`;
    try {
        yield call(() => axios.delete(requestURL));
        const a1 = posts.slice(0, index);
        const a2 = posts.slice(index + 1, posts.length);
        const new_arr = a1.concat(a2);
        console.log(new_arr);
        yield put(actGetListPostSuccess(new_arr));
    } catch (err) {
        yield put(actGetListPostFail(err));
    }
}

export default function* postsData() {
    yield takeLatest(FETCH_LISTPOSTS, getListPosts);
    yield takeLatest(ADD_LISTPOSTS, addItemPost);
    yield takeLatest(DELETE_LISTPOSTS, deleteItemPost);
}