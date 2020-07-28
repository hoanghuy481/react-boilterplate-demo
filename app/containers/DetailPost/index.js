import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { Button } from 'react-bootstrap';

import FormAddEditPost from '../../components/AddEditPost/FormAddEditPost';
import PostItem from '../../components/PostItem/index';
import { actGetListPost } from './actions';
import { makeSelectPosts, makeSelectLoading, makeSelectError } from './selectors';
import ReposList from '../../components/ReposList';
import Pagination from '../../components/Panigation/index';

function ListPosts({ getListPost, posts, loading, error }) {
	const [modalShow, setModalShow] = useState(false);
	const [currentPage, setCurrentPage] = useState(1); // page hien tai
	const [postPerPage] = useState(10);

	const indexOfLastPost = currentPage * postPerPage;
	const indexOfFirstPost = indexOfLastPost - postPerPage;
	const currentPost = posts.slice(indexOfFirstPost, indexOfLastPost);
	const paginate = pageNumber => setCurrentPage(pageNumber);

	const reposListProps = { loading, error };

	useEffect(() => {
		getListPost();
	}, [])

	let xPostItem = [];
	xPostItem = currentPost.map((post, i) => {
		return (
			<PostItem key={i} index={i} post={post} />
		);
	});

	return (
		<div>
			<ReposList {...reposListProps} />
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
			<Pagination
				postPerPost={postPerPage}
				totalPost={posts.length}
				paginate={paginate}
			/>
		</div>
	);
}

ListPosts.propTypes = {
	getListPosts: PropTypes.func,
	loading: PropTypes.bool,
	error: PropTypes.bool,
	posts: PropTypes.oneOfType([PropTypes.array, PropTypes.bool]),
};

const mapStateToProps = createStructuredSelector({
	posts: makeSelectPosts(),
	loading: makeSelectLoading(),
	error: makeSelectError(),

});
const mapDispatchToProps = (dispatch) => {
	return {
		getListPost: () => {
			dispatch(actGetListPost());
		}
	};
}

export default connect(mapStateToProps, mapDispatchToProps)(ListPosts);