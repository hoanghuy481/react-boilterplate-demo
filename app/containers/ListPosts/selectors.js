import { createSelector } from 'reselect';
import { initialState } from './reducer';

const selectPosts = state => state.posts || initialState;

const makeSelectPosts = () =>
  createSelector(
    selectPosts,
    postsState => postsState.posts,
  );

export { selectPosts, makeSelectPosts };