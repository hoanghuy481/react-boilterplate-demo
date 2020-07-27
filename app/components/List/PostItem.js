import React from 'react';
import { Link } from "react-router-dom";
import { Button } from 'react-bootstrap';

function PostItem(props) {
    let item = props.post;
    const handleDelete = async () => {
       
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

export default PostItem;
