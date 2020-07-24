import { FETCH_LISTPOSTS, FETCH_LISTPOSTS_SUCCESS, FETCH_LISTPOSTS_FAIL } from './constants';

export function actGetListPost() {
  return {
    type: FETCH_LISTPOSTS,
  };
}

export function actGetListPostSuccess(posts) {
  return {
    type: FETCH_LISTPOSTS_SUCCESS,
    posts,
  };
}

export function actGetListPostFail(error) {
  return {
    type: FETCH_LISTPOSTS_FAIL,
    error,
  };
}