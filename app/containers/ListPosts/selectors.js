import { createSelector } from 'reselect';
import { initialState } from './reducer';

const selectPosts = state => state.posts || initialState;
const selectItem = state => state.posts || initialState;

const makeSelectPosts = () =>createSelector(
    selectPosts,
    postsState => postsState.posts,
  );

  const makeGetItem = () => createSelector(
    [selectItem],
    itemState => itemState.item,
  );
  
export { selectPosts, makeSelectPosts, makeGetItem, selectItem };

