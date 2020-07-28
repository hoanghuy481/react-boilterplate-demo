import React, { useState, useEffect } from 'react';
import { isEmpty as _isEmpty } from 'lodash';
import { Button } from 'react-bootstrap';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { createStructuredSelector } from 'reselect';

import { actDeleteItem } from '../../containers/ListPosts/actions';
import { actGetPost } from './actions';
import FormAddEditPost from '../../components/AddEditPost/FormAddEditPost';
import { makeSelectDetailPost } from './selectors';
import saga from './saga';
import reducer from './reducer';
import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';

function DetailPost({ getPost, deleteItemPost, match, post }) {
	const key = 'DetailPost';
	const [modalShow, setModalShow] = useState(false);
	let item = {}
	useInjectSaga({ key, saga });
	useInjectReducer({ key, reducer });

	useEffect(() => {
		getPost(match.params.id);
	}, [])

	const handleDelete = async () => {
		deleteItemPost(item)
	};
	
	if(!_isEmpty(post)){
		item = post
		console.log(item);
	}
	
	return (
		<div>
			<h1>Chi tiết Post</h1>
			<form>
				<div className="form-group row">
					<label className="col-sm-2 col-form-label">ID</label>
					<div className="col-sm-10">
						<input type="text" readOnly className="form-control-plaintext" defaultValue={item.id} />
					</div>
				</div>
				<div className="form-group row">
					<label className="col-sm-2 col-form-label">Title</label>
					<div className="col-sm-10">
						<input type="text" readOnly className="form-control-plaintext" defaultValue={item.title} />
					</div>
				</div>
				<div className="form-group row">
					<label className="col-sm-2 col-form-label">Body</label>
					<div className="col-sm-10">
						<input type="text" readOnly className="form-control-plaintext" defaultValue={item.body} />
					</div>
				</div>
				<div className="form-group row">
					<label className="col-sm-2 col-form-label">User ID</label>
					<div className="col-sm-10">
						<input type="text" readOnly className="form-control-plaintext" defaultValue={item.userId} />
					</div>
				</div>
				<div className="form-group row">
					<div className="col-sm-10">
						<Button variant="warning" onClick={() => setModalShow(true)}>
							Edit
                    	</Button>
						<FormAddEditPost show={modalShow} onHide={() => setModalShow(false)} post={item} />
						<button onClick={handleDelete} className="btn btn-danger" type="button">Delete</button>
					</div>
				</div>
			</form>
		</div>

	);
}


DetailPost.propTypes = {
	deleteItemPost: PropTypes.func,
	getPost: PropTypes.func,
};
const mapStateToProps = createStructuredSelector({
	post: makeSelectDetailPost(),

});
const mapDispatchTopost = (dispatch) => {
	return {
		deleteItemPost: item => dispatch(actDeleteItem(item)),
		getPost: id => dispatch(actGetPost(id))
	};
}

export default connect(mapStateToProps, mapDispatchTopost)(DetailPost);