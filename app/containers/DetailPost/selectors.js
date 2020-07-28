import { createSelector } from 'reselect';
import { initialState } from './reducer';

const selectPosts = state => state.posts || initialState;

const makeSelectPosts = () => createSelector(
  selectPosts,
  postsState => postsState.posts,
);

const makeGetItem = () => createSelector(
  selectPosts,
  postsState => postsState.item,
);

const getIndexItem = (state) => {
  const id = state.posts.item.id;
  const posts = state.posts.posts;
  const index = posts.map(post => { return post.id; }).indexOf(id)
  return index
}
const makeSelectIndex = () => createSelector(
  getIndexItem,
  indexState => indexState
);

const editItem = (state) => {
  const item = state.posts.item;
  const posts = state.posts.posts;
  const index = posts.map(post => { return post.id; }).indexOf(item.id)
  posts[index] = item
  return posts
}
const makeEditItem = () => createSelector(
  editItem,
  postsState => postsState
);

const makeSelectLoading = () => createSelector(
  selectPosts,
  postsState => postsState.loading,
);
const makeSelectError = () => createSelector(
  selectPosts,
  postsState => postsState.error,
);


export { 
  selectPosts, 
  makeSelectPosts, 
  makeGetItem, 
  makeSelectIndex, 
  getIndexItem, 
  makeEditItem, 
  editItem, 
  makeSelectLoading, 
  makeSelectError 
};

