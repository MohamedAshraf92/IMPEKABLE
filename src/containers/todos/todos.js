import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

import './todos.css'
import Stories from '../../components/stories/stories'
import axios from '../../axios'
import Todo from '../../components/todo/todo'

const Todos = () => {

    const user = useSelector(state => state.loginReducer.user)

    const [todos, setTodos] = useState([])

    const getTodos = () => {
        axios.get('/todos').then(res => {
            setTodos(res.data.filter(album => album.userId === user.id))
        }).catch(err => window.alert(err))
    }

    useEffect(() => {
        getTodos()
    }, [])

    const todoList = todos.map(todo => {
        return(
            <Todo key={todo.id} title={todo.title} />
        )
    })

    return (
        <div className='background-todos'>
            <div className='todos'>
                <Stories />
                <h3>My To-dos</h3>
                <div className='todos-list'>
                    {todoList}
                </div>
            </div>
        </div>
    );
};

export default Todos;