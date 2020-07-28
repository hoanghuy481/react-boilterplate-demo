import { call, put, select, takeEvery } from 'redux-saga/effects';

import { FETCH_POST  } from './constants';
import { actGetPostSuccess, actGetPostFail } from './actions';
import { makeSelectId } from './selectors';
import { reqListPosts } from '../../utils/request';


export function* getDetailPost() {
    const id = yield select(makeSelectId());
    const requestUrl = `https://jsonplaceholder.typicode.com/posts/${id}`
    try {
        console.log(id);
        const repos = yield call(reqListPosts, requestUrl);
       
        
        yield put(actGetPostSuccess(repos));
    } catch (err) {
        yield put(actGetPostFail(err));
    }
}
 
export default function* detailPostData() {
    yield takeEvery(FETCH_POST, getDetailPost);
}