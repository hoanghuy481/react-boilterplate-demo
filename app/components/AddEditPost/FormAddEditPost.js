import React, { useReducer } from 'react';
import { Button, Modal } from 'react-bootstrap';
import { connect, useDispatch } from 'react-redux';
// import PropTypes from 'prop-types';

import { actAddItem } from '../../containers/ListPosts/actions';
//import { makeSelectPosts } from '../../containers/ListPosts/selectors'

function FormAddEditPost(props, addItem) {
    const [post, setPost] = useReducer(
        (state, newState) => ({ ...state, ...newState }),
        {
            id: '',
            userId: '',
            title: '',
            body: '',
        }
    );
    const handleChange = evt => {
        const name = evt.target.name;
        const newValue = evt.target.value;
        setPost({ [name]: newValue });
    }
    const handleSubmit = () => {
        const dispatch = useDispatch();
        dispatch(actAddItem(post))
    }
    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Post
            </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <div className="form-group">
                    <label htmlFor="exampleInputEmail1">ID</label>
                    <input className="form-control" type="input" value={post.id} readOnly />
                </div>
                <div className="form-group">
                    <label htmlFor="exampleInputPassword1">Title</label>
                    <input type="input" className="form-control" name="title" onChange={handleChange} defaultValue={post.title} placeholder="Title" />
                </div>
                <div className="form-group">
                    <label htmlFor="exampleInputPassword1">Body</label>
                    <input type="input" className="form-control" name="body" onChange={handleChange} defaultValue={post.body} placeholder="Body" />
                </div>
                <div className="form-group">
                    <label htmlFor="exampleInputPassword1">Created By</label>
                    <input className="form-control" type="input" defaultValue={post.userId} readOnly />
                </div>
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={props.onHide}>Close</Button>
                <Button variant="primary" onClick={handleSubmit}>
                    Save Changes
          </Button>
            </Modal.Footer>
        </Modal>
    );
}

// FormAddEditPost.propTypes = {
//     addItem: PropTypes.func
// };

// const mapDispatchToProps = (dispatch) => {
//     return {
//         addItem: (item) => {
//             dispatch(actAddItem(item));
//         }
//     };
// }

// export default connect(null, mapDispatchToProps)(FormAddEditPost);
export default (FormAddEditPost);