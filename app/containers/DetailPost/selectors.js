import { createSelector } from 'reselect';
import { initialState } from './reducer';

const selectPost = state => state.DetailPost || initialState;

const makeSelectId = () => createSelector(
  selectPost,
  idState => idState.id,
);

const makeSelectDetailPost = () => createSelector(
  selectPost,
  DetailPostState => DetailPostState.post,
);

export { 
  selectPost,
  makeSelectId, 
  makeSelectDetailPost
};

