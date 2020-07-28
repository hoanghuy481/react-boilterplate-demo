import post from 'immer';
import {
    FETCH_POST,
    FETCH_POST_SUCCESS,
    FETCH_POST_FAIL,
} from './constants';

export const initialState = {
    loading: false,
    post: {},
    id: {},
    error: false,  
};
/* eslint-disable default-case, no-param-reassign */
const postsReducer = (state = initialState, action) =>
    post(state, draft => {
        switch (action.type) {
            case FETCH_POST:
                draft.loading = true;
                draft.id = action.id
                break;
            case FETCH_POST_SUCCESS:
                draft.post = action.post
                draft.loading = false;
                break;
            case FETCH_POST_FAIL:
                draft.error = true;
                draft.loading = false;
                break;
        }
    });

export default postsReducer;