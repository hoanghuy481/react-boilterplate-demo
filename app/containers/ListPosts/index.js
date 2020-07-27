import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { Button } from 'react-bootstrap';

import FormAddEditPost from '../../components/AddEditPost/FormAddEditPost';
import PostItem from '../../components/List/PostItem';
import { actGetListPost } from './actions';
import { makeSelectPosts } from './selectors';

function ListPosts({ getListPost, posts }) {
	const [modalShow, setModalShow] = useState(false);

	useEffect(() => {
		getListPost();
	}, [])

	let xPostItem = [];
	xPostItem = posts
		.map((post, i) => {
			return (
				<PostItem key={i} index={i} post={post} />
			);
		});

	return (
		<div>
			<div className="page-header">
			</div>
			<div className="row">
				<div className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
					<Button variant="btn btn-success btn-block" onClick={() => setModalShow(true)}>
						Add Post
          			</Button>
					<FormAddEditPost show={modalShow} onHide={() => setModalShow(false)} />
				</div>
			</div>
			<table className="table">
				<thead>
					<tr>
						<th scope="col">STT</th>
						<th scope="col">Title</th>
						<th scope="col">Action</th>
					</tr>
				</thead>
				{xPostItem}
			</table>
		</div>
	);
}

ListPosts.propTypes = {
	getListPosts: PropTypes.func,
	posts: PropTypes.oneOfType([PropTypes.array, PropTypes.bool]),
};

const mapStateToProps = createStructuredSelector({
	posts: makeSelectPosts()
});
const mapDispatchToProps = (dispatch) => {
	return {
		getListPost: () => {
			dispatch(actGetListPost());
		}
	};
}

export default connect(mapStateToProps, mapDispatchToProps)(ListPosts);