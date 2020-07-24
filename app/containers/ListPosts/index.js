import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import PostItem from '../../components/List/PostItem';
import { actGetListPost } from './actions';

export function ListPosts({ getListPost }) {
  useEffect(()=>{
    getListPost();
  })

  return (
    <div>
      <div className="page-header">
        <h1>Danh sách Posts</h1>
      </div>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">STT</th>
            <th scope="col">Title</th>
            <th scope="col">Created Date</th>
            <th scope="col">Created By</th>
            <th scope="col">Total Comments</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <PostItem />
      </table>

    </div>
  );
}

ListPosts.propTypes = {
  getListPost: PropTypes.func,
};

function mapDispatchToProps(dispatch) {
  return {
    getListPost: () => {
      dispatch(actGetListPost());
    }
  };
}

export default connect(null, mapDispatchToProps)(ListPosts);