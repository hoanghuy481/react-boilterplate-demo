import { call, put, takeLatest } from 'redux-saga/effects';
import { FETCH_LISTPOSTS } from './constants';
import { actGetListPostSuccess, actGetListPostFail } from './actions';

import { reqListPosts } from '../../utils/request';

export function* getListPosts() {
    const requestUrl = `https://jsonplaceholder.typicode.com/posts`
    try {
        const data = yield call (reqListPosts, requestUrl);
        yield put(actGetListPostSuccess(data));
    } catch (err) {
        yield put(actGetListPostFail(err));
    }
}

export default function* postsData() {
    yield takeLatest(FETCH_LISTPOSTS, getListPosts);
}
