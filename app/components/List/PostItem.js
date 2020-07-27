import React from 'react';
import { Link } from "react-router-dom";
import { Button } from 'react-bootstrap';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { actDeleteItem } from '../../containers/ListPosts/actions'
function PostItem(props) {
    let item = props.post;

    const handleDelete = async () => {
        props.deleteItemPost(item)
    };

    return (
        <tbody>
            <tr>
                <th>{item.id}</th>
                <th>
                    <Link to={`post-details/${item.id}`}>
                        {item.title}
                    </Link>
                </th>
                <td>
                    <Button variant="warning" onClick={() => setModalShow(true)}>
                        Edit
                    </Button>
                    <button onClick={handleDelete} className="btn btn-danger" type="button">Delete</button>
                </td>
            </tr>
        </tbody>
    );
}
PostItem.propTypes = {
    deleteItemPost: PropTypes.func,
};

const mapDispatchToProps = (dispatch) => {
    return {
        deleteItemPost: item => dispatch(actDeleteItem(item))
    };
}

export default connect(null, mapDispatchToProps)(PostItem);
