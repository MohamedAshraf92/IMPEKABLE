import React from 'react';
import { Link, useHistory } from 'react-router-dom';

import './userCard.css'
import { FaUserCircle } from 'react-icons/fa'

const UserCard = (props) => {

    const history = useHistory()

    return (
        <div className='user-card'>
            
                <div className='user-card-pp'>
                    <Link to={`/user/${props.id}`}>
                        <FaUserCircle className='user-icon' />
                    </Link>
                </div>
                <div className='user-card-info'>
                    <Link to={`/user/${props.id}`} className='user-link'>
                        <h4>{props.name}</h4>
                    </Link>
                    <p>@{props.username}</p>
                </div>
            
        </div>
    );
};

export default UserCard;