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


export { selectPosts, makeSelectPosts, makeGetItem,makeSelectIndex, getIndexItem };

