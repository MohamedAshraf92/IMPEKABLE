import React from 'react';

import './todo.css'
import { AiFillStar } from 'react-icons/ai'
import { TiDelete } from 'react-icons/ti'

const Todo = (props) => {
    return (
        <div className='todo'>
            <div className='todo-body'>
                <p>{props.title}</p>
            </div>
            <div className='todo-actions'>
                <AiFillStar className='status'/>
                <TiDelete className='delete'/>
            </div>
        </div>
    );
};

export default Todo;