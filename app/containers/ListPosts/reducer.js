import listPost from 'immer';
import { FETCH_LISTPOSTS, FETCH_LISTPOSTS_SUCCESS, FETCH_LISTPOSTS_FAIL } from './constants';

export const initialState = {
    loading: false,
    posts: [],
    item: {},
    error: false,
};

/* eslint-disable default-case, no-param-reassign */
const postsReducer = (state = initialState, action) =>
    listPost(state, draft => {
        switch (action.type) {
            case FETCH_LISTPOSTS:
                draft.loading = true;
                break;

            case FETCH_LISTPOSTS_SUCCESS:
                draft.posts = [...action.posts]
                draft.loading = false;
                break;

            case FETCH_LISTPOSTS_FAIL:
                draft.error = action.error;
                draft.loading = false;
                break;
        }
    });

export default postsReducer;