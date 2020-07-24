import React from 'react';
import { Link } from "react-router-dom";
import axios from 'axios';
import { isEmpty as _isEmpty } from 'lodash';
import { Button } from 'react-bootstrap';


function PostItem() {
   
    const handleDelete = async () => {
       
    };

    let item  = {id: '', title: ''}
    return (
        <tbody>
            <tr>
                <th>{item.id}</th>
                <th>
                    <Link to={`post-details/${item.id}`}>
                        {item.title}
                    </Link>
                </th>
                <td>10/01/1998</td>
               
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
