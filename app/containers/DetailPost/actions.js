import {
  FETCH_POST,
  FETCH_POST_SUCCESS,
  FETCH_POST_FAIL,
} from './constants';

export function actGetPost(id) {
  return {
    type: FETCH_POST,
    id,
  };
}

export function actGetPostSuccess(post) {
  return {
    type: FETCH_POST_SUCCESS,
    post,
  };
}

export function actGetPostFail(error) {
  return {
    type: FETCH_POST_FAIL,
    error,
  };
}
